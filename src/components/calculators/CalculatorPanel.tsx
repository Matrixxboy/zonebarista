import { useEffect } from 'react';
import { Formula } from '@/types';
import { useCalculator } from '@/hooks/useCalculator';
import { formatNumber } from '@/utils/formatters';
import Input from '../common/Input';
import Button from '../common/Button';
import SectionLabel from '../common/SectionLabel';

interface CalculatorPanelProps {
  formula: Formula;
  onResult?: (result: number) => void;
}

function CalculatorPanel({ formula, onResult }: CalculatorPanelProps) {
  const { inputs, result, setFormula, setInput, calculate, reset } = useCalculator();

  useEffect(() => {
    setFormula(formula);
  }, [formula, setFormula]);

  const handleCalculate = () => {
    const res = calculate();
    if (res !== null && onResult) {
      onResult(res);
    }
  };

  if (!formula) {
    return <div className="text-sm text-muted">Select a formula to begin</div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b-4 border-black pb-6">
        <p className="text-sm font-mono tracking-widest font-bold mb-2 flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5">{formula.category.toUpperCase()}</span>
          <span>{formula.id}</span>
        </p>
        <h2 className="heading-display text-4xl md:text-5xl uppercase">{formula.name}</h2>
      </div>

      {formula.description && (
        <p className="text-xl font-medium leading-relaxed flush-left bg-[#fdfbf7] p-8 border-l-8 border-black text-black">
          {formula.description}
        </p>
      )}

      <div className="bg-black text-white p-8 border-4 border-black relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-9xl -mt-8 -mr-4 pointer-events-none transition-transform group-hover:scale-110 duration-700">
          ƒ
        </div>
        <p className="text-sm tracking-widest text-gray-300 mb-6 font-mono font-bold uppercase">System Equation</p>
        <div className="font-mono text-2xl md:text-4xl overflow-x-auto whitespace-nowrap pb-4">
          {formula.equation.split('=').map((part, index) => (
            index === 0 ? (
              <span key={index} className="text-accent font-black">{part} =</span>
            ) : (
              <span key={index} className="font-bold"> {part}</span>
            )
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionLabel number={1} text="INPUT VARIABLES" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-4 border-black bg-white">
          {formula.variables.map((variable) => (
            <Input
              key={variable.symbol}
              label={`${variable.symbol} — ${variable.name}`}
              type="number"
              value={inputs[variable.symbol] || ''}
              onChange={(e) => setInput(variable.symbol, parseFloat(e.target.value) || 0)}
              placeholder="0.00"
              helperText={`${variable.unit}${variable.notes ? ` • ${variable.notes}` : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleCalculate} variant="primary" className="flex-1 py-4 text-lg">
          CALCULATE RESULT
        </Button>
        <Button onClick={reset} variant="secondary" className="sm:w-32 py-4">
          RESET
        </Button>
      </div>

      {result !== null && (
        <div className="bg-accent text-white p-8 border-4 border-black relative animate-in fade-in zoom-in-95">
          <p className="text-xs uppercase tracking-widest font-mono font-bold mb-4">CALCULATION OUTPUT</p>
          <div className="flex items-baseline gap-4">
            <span className="text-6xl md:text-8xl font-black tracking-tighter">
              {formatNumber(result)}
            </span>
          </div>
          <p className="text-sm opacity-90 mt-4 font-mono">
            SUCCESSFUL EVALUATION OF [ {formula.id} ]
          </p>
        </div>
      )}

      {formula.examples && formula.examples.length > 0 && (
        <div className="border-t-4 border-black pt-8">
          <SectionLabel number={2} text="WORKED EXAMPLES" className="mb-6" />
          <div className="space-y-6">
            {formula.examples.map((example, idx) => (
              <div key={idx} className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-lg font-bold uppercase bg-black text-white inline-block px-3 py-1">{example.description}</p>
                </div>
                
                {example.explanation && (
                  <div className="mb-4 bg-[#fdfbf7] p-4 border-l-4 border-accent font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {example.explanation}
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-gray-600">Calculated Output:</p>
                  <p className="text-2xl font-black text-accent">
                    {formatNumber(example.output)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalculatorPanel;
