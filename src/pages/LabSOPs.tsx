import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Beaker, Droplet, Flame, Wine, ChevronDown, ChevronUp, TestTube, CheckCircle2 } from 'lucide-react';
import { sops } from '@/data/sops';
import GridPattern from '@/components/common/GridPattern';
import SectionLabel from '@/components/common/SectionLabel';

export default function LabSOPs() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedSop, setExpandedSop] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'ALL PROTOCOLS' },
    { id: 'brewing', label: 'BREWING' },
    { id: 'espresso', label: 'ESPRESSO' },
    { id: 'water', label: 'WATER' },
    { id: 'roasting', label: 'ROASTING' },
    { id: 'sensory', label: 'SENSORY' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'brewing': return <Droplet className="text-accent" />;
      case 'espresso': return <Flame className="text-accent" />;
      case 'water': return <Beaker className="text-accent" />;
      case 'roasting': return <Flame className="text-accent" />;
      case 'sensory': return <Wine className="text-accent" />;
      default: return <TestTube className="text-accent" />;
    }
  };

  const filteredSops = activeCategory === 'all' 
    ? sops 
    : sops.filter(sop => sop.category === activeCategory);

  return (
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <section className="bg-black text-white relative overflow-hidden border-b-4 border-black">
        <GridPattern opacity={10} className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 mb-8 border-4 border-black font-bold uppercase tracking-widest text-sm">
              <TestTube size={20} />
              R&D Laboratory
            </div>
            <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl mb-8 uppercase leading-[0.9]">
              Standard<br />
              Operating<br />
              <span className="text-accent">Procedures</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-gray-300 font-medium leading-relaxed border-l-4 border-accent pl-6">
              Rigorous, standardized methodologies for coffee experimentation, flavor isolation, and recipe development.
            </p>
          </div>
        </GridPattern>
      </section>

      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all border-4 ${
                activeCategory === cat.id
                  ? 'bg-black text-white border-black scale-105 shadow-[4px_4px_0px_0px_rgba(255,48,0,1)]'
                  : 'bg-white text-black border-black hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SOP List */}
        <div className="space-y-8">
          {filteredSops.map((sop) => (
            <div key={sop.id} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <button 
                onClick={() => setExpandedSop(expandedSop === sop.id ? null : sop.id)}
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:bg-[#fdfbf7] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {getCategoryIcon(sop.category)}
                    <span className="font-mono text-sm font-bold uppercase tracking-widest text-gray-500">
                      {sop.category} PROTOCOL
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{sop.title}</h2>
                  <p className="mt-3 text-gray-600 font-medium line-clamp-2 md:line-clamp-1">{sop.objective}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full flex-shrink-0">
                  {expandedSop === sop.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {expandedSop === sop.id && (
                <div className="p-6 md:p-8 border-t-4 border-black bg-[#fdfbf7] animate-in slide-in-from-top-2 duration-200">
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <SectionLabel number={1} text="EQUIPMENT NEEDED" className="mb-4" />
                      <ul className="space-y-2">
                        {sop.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <SectionLabel number={2} text="VARIABLES TRACKED" className="mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {sop.variables.map((variable, idx) => (
                          <span key={idx} className="bg-black text-white px-3 py-1 font-mono text-sm font-bold uppercase tracking-widest">
                            {variable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Procedure */}
                  <div className="mb-12">
                    <SectionLabel number={3} text="PROCEDURE" className="mb-6" />
                    <div className="space-y-4">
                      {sop.procedure.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="font-medium text-lg leading-relaxed pt-0.5">
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                              {step}
                            </ReactMarkdown>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Analysis */}
                  <div className="bg-white border-4 border-black p-6 md:p-8">
                    <SectionLabel number={4} text="ANALYSIS & RESULTS" className="mb-6" />
                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-h3:text-2xl prose-a:text-accent hover:prose-a:text-black prose-a:font-bold prose-li:marker:text-black text-black">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {sop.analysis}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
