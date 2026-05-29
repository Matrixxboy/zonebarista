import { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('brewing');
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const { exportCSV } = useStorage();

  const categories: CategoryType[] = ['brewing', 'water', 'roasting', 'business', 'sensory'];

  const handleExport = () => {
    const csv = exportCSV();
    downloadCSV(csv);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="heading-display text-6xl md:text-8xl mb-12">
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
              onSelect={setSelectedFormula}
              selectedId={selectedFormula?.id}
            />
          </div>

          {selectedFormula && (
            <div className="border-t-4 border-black pt-8">
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
