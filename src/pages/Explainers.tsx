import GridPattern from '@/components/common/GridPattern';
import Card from '@/components/common/Card';
import { formulas } from '@/data/formulas';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Droplet, Flame, Sigma, Briefcase, Wine } from 'lucide-react';

export default function Explainers() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return Droplet;
      case 'roasting': return Flame;
      case 'business': return Briefcase;
      case 'sensory': return Wine;
      case 'brewing':
      default: return Beaker;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <GridPattern className="mb-12 md:mb-16 p-8 md:p-12 border-4 border-black bg-white" opacity={3}>
        <h1 className="heading-display text-[12vw] sm:text-6xl md:text-8xl mb-6 uppercase leading-[0.9] break-words">
          SCIENCE<br />EXPLAINERS
        </h1>
        <p className="text-base md:text-lg max-w-2xl flush-left leading-relaxed">
          Deep-dive explorations of the fundamental mathematical, chemical, and thermodynamic principles governing specialty coffee.
        </p>
      </GridPattern>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {formulas.map((formula) => {
          const Icon = getCategoryIcon(formula.category);

          return (
            <Card key={formula.id} variant="default" className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold bg-black text-white self-start px-2 py-1 uppercase">
                <Icon size={12} />
                <span>{formula.category} • {formula.id}</span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold uppercase mb-3 flex-1">{formula.name}</h2>
              
              <p className="text-sm leading-relaxed mb-6 text-gray-600 line-clamp-3 border-l-2 border-black pl-3">
                {formula.description}
              </p>
              
              <div className="mt-auto">
                <Link to={`/formulas/${formula.id}`} className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold text-accent hover:text-black transition-colors group">
                  READ EXPLORATION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
