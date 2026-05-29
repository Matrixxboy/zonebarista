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
    <div className="space-y-6">
      <div>
        <h2 className="heading-display text-3xl md:text-4xl mb-2">{formula.name}</h2>
        <p className="text-sm text-muted">{formula.category.toUpperCase()}</p>
      </div>

      <div className="bg-muted border-2 border-black p-4 font-mono text-sm overflow-x-auto">
        <code>{formula.equation}</code>
      </div>

      {formula.description && (
        <p className="text-base leading-relaxed flush-left">
          {formula.description}
        </p>
      )}

      <div className="space-y-4">
        <SectionLabel number={1} text="INPUTS" />
        {formula.variables.map((variable) => (
          <Input
            key={variable.symbol}
            label={`${variable.symbol} — ${variable.name}`}
            type="number"
            value={inputs[variable.symbol] || ''}
            onChange={(e) => setInput(variable.symbol, parseFloat(e.target.value) || 0)}
            placeholder="0"
            helperText={`${variable.unit}${variable.notes ? ` • ${variable.notes}` : ''}`}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <Button onClick={handleCalculate} variant="primary" className="flex-1">
          Calculate
        </Button>
        <Button onClick={reset} variant="secondary">
          Reset
        </Button>
      </div>

      {result !== null && (
        <div className="bg-accent text-white p-6 border-2 border-accent">
          <p className="text-xs uppercase tracking-widest font-bold mb-2">RESULT</p>
          <p className="text-4xl font-black mb-2">
            {formatNumber(result)}
          </p>
          <p className="text-sm opacity-90">
            {formula.name} calculated successfully
          </p>
        </div>
      )}

      {formula.examples && formula.examples.length > 0 && (
        <div className="border-t-2 border-black pt-6">
          <SectionLabel number={2} text="EXAMPLES" className="mb-4" />
          <div className="space-y-3">
            {formula.examples.map((example, idx) => (
              <div key={idx} className="bg-muted p-4 border border-black">
                <p className="text-sm font-semibold mb-2">{example.description}</p>
                <p className="text-xs text-muted">
                  Result: {formatNumber(example.output)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalculatorPanel;
