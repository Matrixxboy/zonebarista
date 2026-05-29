import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Formula } from '@/types';
import { formulas } from '@/data/formulas';
import FormulaGrid from '@/components/calculators/FormulaGrid';
import CalculatorPanel from '@/components/calculators/CalculatorPanel';
import Card from '@/components/common/Card';
import SectionLabel from '@/components/common/SectionLabel';
import Button from '@/components/common/Button';
import { useStorage } from '@/hooks/useStorage';
import { generateCSV, downloadCSV } from '@/utils/export';

type CategoryType = 'brewing' | 'water' | 'roasting' | 'business' | 'sensory';

const categoryDescriptions: Record<CategoryType, string> = {
  brewing: 'Brewing ratios, extraction calculations, and dosing formulas.',
  water: 'TDS, hardness, and mineral content calculations.',
  roasting: 'Temperature curves, time calculations, and batch analysis.',
  business: 'Pricing, cost analysis, and financial calculations.',
  sensory: 'Cupping scores and sensory evaluation metrics.',
};

function Calculators() {
  const location = useLocation();
  const initialFormulaId = location.state?.selectedFormulaId;
  const initialFormula = initialFormulaId ? formulas.find(f => f.id === initialFormulaId) : null;

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialFormula ? initialFormula.category : 'brewing');
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(initialFormula || null);
  const [result, setResult] = useState<number | null>(null);
  const { exportCSV } = useStorage();
  const panelRef = useRef<HTMLDivElement>(null);

  const categories: CategoryType[] = ['brewing', 'water', 'roasting', 'business', 'sensory'];

  const handleFormulaSelect = (formula: Formula) => {
    setSelectedFormula(formula);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleExport = () => {
    const csv = exportCSV();
    downloadCSV(csv);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="heading-display text-[12vw] sm:text-6xl md:text-8xl mb-12 leading-none break-words">
        FORMULA<br />CALCULATORS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <SectionLabel number={1} text="CATEGORIES" className="mb-6" />
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  w-full text-left p-3 border-2 transition-all duration-150
                  ${selectedCategory === cat
                    ? 'bg-accent text-white border-accent font-bold'
                    : 'bg-white border-black hover:bg-muted'
                  }
                `}
              >
                <p className="text-sm uppercase tracking-tight font-semibold">
                  {cat}
                </p>
              </button>
            ))}
          </div>

          <Card className="mt-8" variant="muted">
            <SectionLabel number={2} text="DESCRIPTION" className="mb-4" />
            <p className="text-sm leading-relaxed">
              {categoryDescriptions[selectedCategory]}
            </p>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div>
            <SectionLabel number={3} text="SELECT FORMULA" className="mb-4" />
            <FormulaGrid
              category={selectedCategory}
              onSelect={handleFormulaSelect}
              selectedId={selectedFormula?.id}
            />
          </div>

          {selectedFormula && (
            <div ref={panelRef} className="border-t-4 border-black pt-8 scroll-mt-24">
              <CalculatorPanel
                formula={selectedFormula}
                onResult={setResult}
              />

              {result !== null && (
                <Button
                  onClick={handleExport}
                  variant="secondary"
                  className="mt-8 w-full"
                >
                  Export Calculations
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculators;
