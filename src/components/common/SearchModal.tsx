import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Book, Target, FlaskConical, Sigma, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';

import { formulas } from '@/data/formulas';
import { sops } from '@/data/sops';
import { files as knowledgeFiles } from '@/data/knowledge';
import { navTopics } from '@/data/navigatorData';

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  type: 'page' | 'formula' | 'knowledge' | 'sop' | 'topic';
  path: string;
  tags?: string[];
  content?: string;
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fullItems, setFullItems] = useState<SearchResult[]>([]);
  const [isIndexing, setIsIndexing] = useState(false);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize base items
  useEffect(() => {
    const items: SearchResult[] = [
      { id: 'home', title: 'Learning System', type: 'page', path: '/', description: 'Interactive learning navigator and topics' },
      { id: 'calculators', title: 'Calculators', type: 'page', path: '/calculators', description: 'Interactive coffee brewing calculators' },
      { id: 'explainers', title: 'Explainers', type: 'page', path: '/explainers', description: 'Visual explainers for coffee science' },
      { id: 'developer', title: 'Developer Profile', type: 'page', path: '/developer', description: 'About the creator' },
      
      ...formulas.map(f => ({
        id: `formula-${f.id}`,
        title: f.name,
        description: f.description,
        type: 'formula' as const,
        path: '/calculators',
        tags: [f.category]
      })),
      
      ...sops.map(s => ({
        id: `sop-${s.id}`,
        title: s.title,
        description: s.objective,
        type: 'sop' as const,
        path: '/explainers', // SOPs might live here or in knowledge
        tags: [s.category]
      })),
      
      ...navTopics.map(t => ({
        id: `topic-${t.id}`,
        title: t.title,
        description: t.description,
        type: 'topic' as const,
        path: '/learning', // Topics are usually on home/learning
        tags: [...t.tags, t.category]
      })),
      
      ...knowledgeFiles.filter(k => k.type !== 'index' && k.type !== 'data').map(k => ({
        id: `kb-${k.id}`,
        title: k.title,
        description: k.keyTopics,
        type: 'knowledge' as const,
        path: `/knowledge-base/${k.id}`,
        tags: [k.difficulty]
      }))
    ];
    setFullItems(items);
  }, []);

  // Fetch full content for knowledge base files when modal opens
  useEffect(() => {
    if (isOpen && fullItems.length > 0 && !isIndexing) {
      const loadContents = async () => {
        setIsIndexing(true);
        const updatedItems = [...fullItems];
        
        for (const item of updatedItems) {
          if (item.type === 'knowledge') {
            const kbFile = knowledgeFiles.find(k => `kb-${k.id}` === item.id);
            if (kbFile) {
              try {
                const res = await fetch(`/coffee-knowledge-base/${kbFile.path}`);
                if (res.ok) {
                  const text = await res.text();
                  item.content = text;
                }
              } catch (e) {
                console.error(`Failed to load ${kbFile.path}`, e);
              }
            }
          }
        }
        setFullItems(updatedItems);
      };
      
      loadContents();
    }
  }, [isOpen]);

  const fuse = useMemo(() => new Fuse(fullItems, {
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'tags', weight: 0.2 },
      { name: 'description', weight: 0.1 },
      { name: 'content', weight: 0.1 }
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2
  }), [fullItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);
    setSelectedIndex(0);
    if (value.length > 0) {
      const fuseResults = fuse.search(value);
      setResults(fuseResults.map(r => r.item).slice(0, 15)); // limit results
    } else {
      setResults([]);
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    navigate(result.path);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectResult(results[selectedIndex]);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'formula': return <Sigma size={16} />;
      case 'sop': return <FlaskConical size={16} />;
      case 'knowledge': return <Book size={16} />;
      case 'topic': return <Target size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formula': return 'bg-purple-100 text-purple-800';
      case 'sop': return 'bg-blue-100 text-blue-800';
      case 'knowledge': return 'bg-emerald-100 text-emerald-800';
      case 'topic': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm"
      >
        <Search size={16} />
        <span className="hidden sm:inline">Search</span>
        <span className="hidden sm:inline text-gray-400 ml-2">⌘K</span>
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-[15%] left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col max-h-[70vh] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 bg-white shrink-0">
            <Search size={20} className="text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search formulas, SOPs, knowledge base..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleModalKeyDown}
              className="flex-1 bg-transparent outline-none text-lg text-gray-800 placeholder:text-gray-400"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 bg-white">
            {results.length > 0 && (
              <div className="p-2 space-y-1">
                {results.map((result, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={result.id}
                      onClick={() => handleSelectResult(result)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-start gap-4 ${
                        isSelected 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`mt-0.5 p-2 rounded-md ${isSelected ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                        {getTypeIcon(result.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <p className="font-semibold text-gray-900 truncate">
                            {result.title}
                          </p>
                          <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                        </div>
                        
                        {result.description && (
                          <p className={`text-sm line-clamp-1 ${isSelected ? 'text-gray-600' : 'text-gray-500'}`}>
                            {result.description}
                          </p>
                        )}
                        
                        {result.tags && result.tags.length > 0 && (
                          <div className="flex gap-2 mt-2">
                            {result.tags.slice(0, 3).map(tag => (
                              <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${isSelected ? 'bg-white text-gray-700 border border-gray-200' : 'bg-gray-100 text-gray-600'}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="px-4 py-12 text-center flex flex-col items-center">
                <Search size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-500 font-bold uppercase tracking-wider">No results found for "{query}"</p>
              </div>
            )}

            {!query && (
              <div className="px-4 py-12 text-center text-sm text-gray-500 font-bold uppercase tracking-widest">
                Start typing to search across the entire platform
                {isIndexing && <span className="block mt-2 text-xs text-accent">Indexing knowledge base contents...</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
