import { Formula } from '@/types';
import { formulasByCategory } from '@/data/formulas';
import Card from '../common/Card';

interface FormulaGridProps {
  onSelect: (formula: Formula) => void;
  selectedId?: string;
  category?: string;
}

function FormulaGrid({ onSelect, selectedId, category = 'brewing' }: FormulaGridProps) {
  const categoryMap: Record<string, keyof typeof formulasByCategory> = {
    brewing: 'brewing',
    water: 'water',
    roasting: 'roasting',
    business: 'business',
    sensory: 'sensory',
  };

  const formulas = formulasByCategory[categoryMap[category] || 'brewing'];

  if (!formulas || formulas.length === 0) {
    return <div className="text-sm text-muted">No formulas available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {formulas.map((formula) => (
        <button
          key={formula.id}
          onClick={() => onSelect(formula)}
          className={`
            text-left p-4 border-2 transition-all duration-150 cursor-pointer
            ${selectedId === formula.id
              ? 'bg-accent text-white border-accent'
              : 'bg-white border-black hover:bg-muted'
            }
          `}
        >
          <p className="font-bold text-sm uppercase tracking-tight">{formula.name}</p>
          <p className={`text-xs mt-2 ${selectedId === formula.id ? 'opacity-90' : 'text-muted'}`}>
            {formula.variables.length} variables
          </p>
        </button>
      ))}
    </div>
  );
}

export default FormulaGrid;
