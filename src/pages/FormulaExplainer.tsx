import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calculator } from 'lucide-react';
import { formulas } from '@/data/formulas';
import GridPattern from '@/components/common/GridPattern';

export default function FormulaExplainer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const formula = formulas.find((f) => f.id === id);

  if (!formula) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="heading-display text-4xl mb-6 uppercase">Formula Not Found</h1>
        <button onClick={() => navigate('/calculators')} className="btn-primary">
          Return to Compute Engine
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Link 
        to="/calculators" 
        className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Compute Engine
      </Link>

      <GridPattern className="mb-12 p-8 md:p-16 border-4 border-black bg-[#fdfbf7]" opacity={3}>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-black text-white px-3 py-1 font-mono text-sm font-bold uppercase tracking-widest">
            {formula.category}
          </span>
          <span className="text-gray-500 font-mono text-sm font-bold uppercase tracking-widest">
            ID: {formula.id}
          </span>
        </div>
        
        <h1 className="heading-display text-[12vw] sm:text-5xl md:text-7xl mb-8 uppercase leading-none tracking-tighter break-words">
          {formula.name}
        </h1>

        <div className="bg-black text-white p-6 border-4 border-black relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-9xl -mt-8 -mr-4 pointer-events-none transition-transform group-hover:scale-110 duration-700">
            ƒ
          </div>
          <p className="text-xs tracking-widest text-gray-300 mb-4 font-mono font-bold uppercase">System Equation</p>
          <div className="font-mono text-2xl md:text-3xl whitespace-normal break-words leading-tight">
            {formula.equation.split('=').map((part, index) => (
              index === 0 ? (
                <span key={index} className="text-accent font-black">{part} =</span>
              ) : (
                <span key={index} className="font-bold"> {part}</span>
              )
            ))}
          </div>
        </div>
      </GridPattern>

      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-4xl prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-4 prose-h2:mt-16 prose-h3:text-2xl prose-a:text-accent hover:prose-a:text-black prose-a:font-bold prose-table:border-4 prose-table:border-black prose-th:bg-black prose-th:text-white prose-th:border-2 prose-th:border-black prose-th:p-1 sm:prose-th:p-3 prose-td:border-2 prose-td:border-black prose-td:p-1 sm:prose-td:p-3 prose-li:marker:text-black text-black">
        {formula.inDepth ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              table: ({node, ...props}) => (
                <div className="w-full mb-8 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm md:text-base" {...props} />
                </div>
              )
            }}
          >
            {formula.inDepth}
          </ReactMarkdown>
        ) : (
          <p className="italic text-gray-500">In-depth scientific explanation is currently being researched and will be published shortly.</p>
        )}
      </div>

      <div className="mt-20 pt-10 border-t-4 border-black flex justify-center">
        <Link 
          to="/calculators"
          state={{ selectedFormulaId: formula.id }}
          className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
        >
          <Calculator size={24} />
          OPEN IN COMPUTE ENGINE
        </Link>
      </div>
    </div>
  );
}
