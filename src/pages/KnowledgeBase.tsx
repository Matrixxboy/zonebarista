import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ChevronRight, Folder, FileText, Database, BookOpen, Coffee, Flame, Droplet, Beaker, Briefcase, GraduationCap, Sigma, Wine, ChevronDown } from 'lucide-react';
import { domains, files, KnowledgeFile } from '@/data/knowledge';
import GridPattern from '@/components/common/GridPattern';
import AnalyticsDashboard from '@/components/dashboard/AnalyticsDashboard';

const MermaidChart = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState('');
  
  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: false, 
      theme: 'base',
      securityLevel: 'loose',
      flowchart: {
        htmlLabels: true,
        padding: 20
      },
      sequence: {
        // @ts-ignore
        htmlLabels: true
      },
      themeVariables: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '18px', // Trick Mermaid into calculating larger bounding boxes
        primaryColor: '#ffffff',
        primaryTextColor: '#000000',
        primaryBorderColor: '#000000',
        lineColor: '#000000',
        secondaryColor: '#f3f4f6',
        tertiaryColor: '#e5e7eb'
      }
    });
    
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    const renderChart = async () => {
      try {
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (err) {
        console.error("Mermaid parsing error", err);
      }
    };
    renderChart();
  }, [chart]);

  return (
    <div className="my-8 relative bg-[#fdfbf7] border-4 border-black group">
      <style>{`
        .mermaid-chart svg { max-width: 100%; height: auto; font-size: 14px !important; overflow: visible; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important; }
        
        /* Brutalist Nodes */
        .mermaid-chart .node rect, 
        .mermaid-chart .node circle, 
        .mermaid-chart .node ellipse, 
        .mermaid-chart .node polygon, 
        .mermaid-chart .node path { 
          stroke-width: 4px !important; 
          stroke: #000 !important;
          fill: #fff !important;
          rx: 0 !important; /* Square corners for brutalism */
          ry: 0 !important;
        }

        /* Prevent text cutoff inside nodes */
        .mermaid-chart .nodeLabel { 
          color: #000 !important;
          line-height: 1.2 !important; /* Tighter line height ensures text doesn't hit the bottom edge */
        }
        
        .mermaid-chart foreignObject {
          overflow: visible !important;
        }

        /* Edges */
        .mermaid-chart .edgePath .path { stroke-width: 3px !important; stroke: #000 !important; }
        .mermaid-chart .marker { fill: #000 !important; stroke: #000 !important; }
        
        /* Edge Labels */
        .mermaid-chart .edgeLabel { background-color: #fff !important; border: 2px solid #000 !important; padding: 2px 6px !important; }
      `}</style>
      
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => zoomIn()} 
                className="w-8 h-8 flex items-center justify-center bg-black text-white font-bold text-lg hover:bg-accent hover:text-black transition-colors"
                title="Zoom In"
              >
                +
              </button>
              <button 
                onClick={() => zoomOut()} 
                className="w-8 h-8 flex items-center justify-center bg-black text-white font-bold text-lg hover:bg-accent hover:text-black transition-colors"
                title="Zoom Out"
              >
                -
              </button>
              <button 
                onClick={() => resetTransform()} 
                className="w-8 h-8 flex items-center justify-center bg-black text-white font-bold text-xs hover:bg-accent hover:text-black transition-colors"
                title="Reset Zoom"
              >
                R
              </button>
            </div>
            
            <TransformComponent wrapperStyle={{ width: "100%", height: "auto", overflow: "hidden", minHeight: "400px" }}>
              <div 
                className="mermaid-chart flex items-center justify-center w-full p-6 cursor-move" 
                dangerouslySetInnerHTML={{ __html: svg }} 
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

const getDomainIcon = (label: string) => {
  if (label.includes('Espresso')) return Coffee;
  if (label.includes('Roasting')) return Flame;
  if (label.includes('Water')) return Droplet;
  if (label.includes('Chemistry')) return Beaker;
  if (label.includes('Operations')) return Briefcase;
  if (label.includes('Learning')) return GraduationCap;
  if (label.includes('Formulas')) return Sigma;
  if (label.includes('Sensory')) return Wine;
  if (label.includes('Fundamental')) return BookOpen;
  return Folder;
};

export default function KnowledgeBase() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [openDomains, setOpenDomains] = useState<Record<string, boolean>>({});
  const [selectedFile, setSelectedFile] = useState<KnowledgeFile | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const targetId = id || 'F00';
    const file = files.find(f => f.id === targetId);
    if (file) {
      loadFileContent(file);
      if (file.domainId !== 'root') {
        setOpenDomains(prev => ({ ...prev, [file.domainId]: true }));
      }
    } else {
      // Fallback if id is invalid
      const indexFile = files.find(f => f.id === 'F00');
      if (indexFile) loadFileContent(indexFile);
    }
  }, [id]);

  const toggleDomain = (domainId: string) => {
    setOpenDomains(prev => ({ ...prev, [domainId]: !prev[domainId] }));
  };

  const loadFileContent = async (file: KnowledgeFile) => {
    if (file.id === 'F00' || file.type === 'index' || file.type === 'data') {
      setSelectedFile(file);
      setMarkdownContent('');
      setIsLoading(false);
      return;
    }

    setSelectedFile(file);
    setIsLoading(true);
    try {
      const response = await fetch(`/coffee-knowledge-base/${file.path}`);
      if (!response.ok) throw new Error('File not found');
      let text = await response.text();
      
      const yamlRegex = /^---([\s\S]*?)---/;
      text = text.replace(yamlRegex, '');
      
      setMarkdownContent(text);
    } catch (error) {
      console.error(error);
      setMarkdownContent('# Error\nCould not load document.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (file: KnowledgeFile) => {
    navigate(`/knowledge-base/${file.id}`);
  };

  const renderSidebar = () => {
    return (
      <div className={`w-full md:w-80 border-r-0 md:border-r-4 border-black bg-[#fdfbf7] flex-shrink-0 flex-col h-full overflow-hidden relative z-10 md:flex ${isSidebarOpen ? 'flex' : 'hidden'}`}>
        <div className="p-4 border-b-4 border-black bg-black text-white font-mono uppercase tracking-wider text-sm flex items-center justify-between">
          <span>Notebook Index</span>
          <button 
            className="md:hidden text-white hover:text-accent font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            CLOSE
          </button>
        </div>
        
        <div className="border-b-4 border-black bg-white p-3">
          <input 
            type="text" 
            placeholder="Search topics or IDs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#fdfbf7] border-2 border-black p-2 font-mono text-sm placeholder-gray-500 focus:outline-none focus:border-accent"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {domains.map(domain => {
            const domainFiles = files.filter(f => f.domainId === domain.id).filter(f => {
              if (!searchQuery) return true;
              const q = searchQuery.toLowerCase();
              return f.title.toLowerCase().includes(q) || f.keyTopics.toLowerCase().includes(q) || f.id.toLowerCase().includes(q);
            });
            
            if (domainFiles.length === 0) return null;
            
            const isOpen = openDomains[domain.id] || (searchQuery.length > 0 && domainFiles.length > 0);
            const Icon = getDomainIcon(domain.label);

            return (
              <div key={domain.id} className="space-y-1">
                <button
                  onClick={() => toggleDomain(domain.id)}
                  className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors text-left"
                >
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  <Icon size={16} className="text-gray-700" />
                  <span className="font-mono text-sm uppercase font-bold truncate">{domain.label}</span>
                </button>
                
                {isOpen && (
                  <div className="pl-6 border-l-2 border-black ml-3 space-y-1 my-1">
                    {domainFiles.map(file => {
                      const isSelected = selectedFile?.id === file.id;
                      const FileIcon = file.type === 'data' ? Database : FileText;
                      return (
                        <button
                          key={file.id}
                          onClick={() => handleFileSelect(file)}
                          className={`w-full flex items-center gap-2 p-1.5 text-sm transition-colors text-left ${isSelected ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-800'}`}
                        >
                          <FileIcon size={14} className={isSelected ? 'text-white' : 'text-gray-600'} />
                          <span className="truncate">{file.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderPagination = () => {
    if (!selectedFile || selectedFile.id === 'F00') return null;
    
    // Filter out root index and structured data from navigation
    const navigableFiles = files.filter(f => f.type !== 'index' && f.type !== 'data');
    const currentIndex = navigableFiles.findIndex(f => f.id === selectedFile.id);
    if (currentIndex === -1) return null;
    
    const prevFile = currentIndex > 0 ? navigableFiles[currentIndex - 1] : null;
    const nextFile = currentIndex < navigableFiles.length - 1 ? navigableFiles[currentIndex + 1] : null;
    
    return (
      <div className="mt-16 pt-8 border-t-4 border-black grid grid-cols-1 md:grid-cols-2 gap-4">
        {prevFile ? (
          <button 
            onClick={() => {
              handleFileSelect(prevFile);
              setOpenDomains(prev => ({ ...prev, [prevFile.domainId]: true }));
            }}
            className="flex flex-col items-start p-4 border-2 border-black hover:bg-[#fdfbf7] hover:-translate-y-1 transition-all text-left"
          >
            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Previous Document</span>
            <span className="font-bold text-lg">{prevFile.title}</span>
          </button>
        ) : <div />}
        
        {nextFile ? (
          <button 
            onClick={() => {
              handleFileSelect(nextFile);
              setOpenDomains(prev => ({ ...prev, [nextFile.domainId]: true }));
            }}
            className="flex flex-col items-end p-4 border-2 border-black hover:bg-[#fdfbf7] hover:-translate-y-1 transition-all text-right"
          >
            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Next Document</span>
            <span className="font-bold text-lg">{nextFile.title}</span>
          </button>
        ) : <div />}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] border-t-4 border-black">
      {renderSidebar()}
      
      <div className={`flex-1 overflow-y-auto bg-white relative ${isSidebarOpen ? 'hidden md:block' : 'block'}`}>
        <GridPattern opacity={4} className="min-h-full p-4 sm:p-6 md:p-12">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <span className="font-mono text-xl uppercase tracking-widest animate-pulse">Loading Document...</span>
            </div>
          ) : (
            <div className="w-full h-full max-w-none">
              {selectedFile?.id === 'F00' ? (
                <div className="w-full h-full flex flex-col">
                  <div className="md:hidden mb-6 flex-shrink-0">
                    <button 
                      className="w-full bg-black text-white px-4 py-4 font-mono font-bold tracking-widest text-sm hover:bg-accent hover:text-black transition-colors border-4 border-black"
                      onClick={() => setIsSidebarOpen(true)}
                    >
                      OPEN NOTEBOOK INDEX
                    </button>
                  </div>
                  <div className="flex-1 min-h-0">
                    <AnalyticsDashboard onNodeClick={(id) => {
                      const targetFile = files.find(f => f.id === id);
                  if (targetFile) {
                    handleFileSelect(targetFile);
                    setOpenDomains(prev => ({ ...prev, [targetFile.domainId]: true }));
                    setIsSidebarOpen(false); // Close sidebar on mobile after selection
                  }
                    }} />
                  </div>
                </div>
              ) : (
                <div className="prose prose-lg max-w-4xl mx-auto prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:border-b-4 prose-h1:border-black prose-h1:pb-4 prose-h1:mb-8 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-black prose-h2:pb-2 prose-h2:mt-12 prose-h3:text-xl md:prose-h3:text-2xl prose-a:text-accent hover:prose-a:text-black prose-a:font-bold prose-img:border-4 prose-img:border-black prose-img:w-full prose-pre:bg-gray-100 prose-pre:border-4 prose-pre:border-black prose-pre:text-black prose-pre:rounded-none prose-table:border-4 prose-table:border-black prose-th:bg-black prose-th:text-white prose-th:border-2 prose-th:border-black prose-th:p-1 sm:prose-th:p-3 prose-td:border-2 prose-td:border-black prose-td:p-1 sm:prose-td:p-3 prose-blockquote:border-l-8 prose-blockquote:border-black prose-blockquote:bg-muted prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:not-italic prose-li:marker:text-black text-black">
                  <div className="mb-8 pb-4 border-b-4 border-black font-mono text-sm uppercase flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <button 
                        className="md:hidden bg-black text-white px-3 py-1 font-bold hover:bg-accent hover:text-black transition-colors"
                        onClick={() => setIsSidebarOpen(true)}
                      >
                        VIEW INDEX
                      </button>
                      <span className="bg-black text-white px-3 py-1 font-bold">{selectedFile?.domainId}</span>
                      <span className="font-bold tracking-widest">{domains.find(d => d.id === selectedFile?.domainId)?.label}</span>
                    </div>
                    {selectedFile?.keyTopics && <div className="text-gray-600 mt-2">Topics: {selectedFile.keyTopics}</div>}
                    {selectedFile?.difficulty && <div className="text-gray-600">Difficulty: <span className="font-bold text-black">{selectedFile.difficulty}</span></div>}
                  </div>
                  
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, [rehypeKatex, { strict: false }], rehypeHighlight]}
                    components={{
                      table: ({node, ...props}) => (
                        <div className="w-full mb-8 overflow-x-auto">
                          <table className="w-full text-xs sm:text-sm md:text-base" {...props} />
                        </div>
                      ),
                      code(props) {
                        const {children, className, node, ...rest} = props;
                        const match = /language-(\w+)/.exec(className || '');
                        if (match && match[1] === 'mermaid') {
                          return <MermaidChart chart={String(children).replace(/\n$/, '')} />;
                        }
                        return <code {...rest} className={className}>{children}</code>;
                      },
                      a(props) {
                        const { href, children, ...rest } = props;
                        if (href && href.includes('.md')) {
                          return (
                            <a 
                              href={href}
                              onClick={(e) => {
                                let pathOnly = href.split('#')[0];
                                
                                // If it's a full URL, extract just the pathname
                                if (pathOnly.startsWith('http')) {
                                  try {
                                    const url = new URL(pathOnly);
                                    pathOnly = url.pathname;
                                  } catch (err) {}
                                }
                                
                                // Clean up path (remove leading slashes or base URL prefixes)
                                pathOnly = pathOnly.replace(/^\/+/, '');
                                pathOnly = pathOnly.replace(/^coffee-knowledge-base\//, '');
                                
                                // 1. Try absolute match first
                                let targetFile = files.find(f => f.path === pathOnly);
                                
                                // 2. If not found, resolve relative to current file
                                if (!targetFile && selectedFile) {
                                  const stack = selectedFile.path.split('/').slice(0, -1);
                                  const parts = pathOnly.split('/');
                                  for (const p of parts) {
                                    if (p === '..') stack.pop();
                                    else if (p !== '.' && p !== '') stack.push(p);
                                  }
                                  const targetPath = stack.join('/');
                                  targetFile = files.find(f => f.path === targetPath);
                                }
                                
                                if (targetFile) {
                                  e.preventDefault();
                                  handleFileSelect(targetFile);
                                  setOpenDomains(prev => ({ ...prev, [targetFile.domainId]: true }));
                                }
                              }}
                              {...rest}
                            >
                              {children}
                            </a>
                          );
                        }
                        return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
                      }
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                  
                  {renderPagination()}
                </div>
              )}
            </div>
          )}
        </GridPattern>
      </div>
    </div>
  );
}
