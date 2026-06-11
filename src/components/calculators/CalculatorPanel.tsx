import { useEffect } from 'react';
import { Formula } from '@/types';
import { useCalculator } from '@/hooks/useCalculator';
import { formatNumber, getResultPrefix, getResultSuffix } from '@/utils/formatters';
import { evaluateResult } from '@/utils/evaluators';
import Input from '../common/Input';
import Button from '../common/Button';
import SectionLabel from '../common/SectionLabel';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Line, Radar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CalculatorPanelProps {
  formula: Formula;
  onResult?: (result: number) => void;
}

function CalculatorPanel({ formula, onResult }: CalculatorPanelProps) {
  const { inputs, rawInputs, result, setFormula, setInput, calculate, reset } = useCalculator();

  useEffect(() => {
    setFormula(formula);
  }, [formula, setFormula]);

  const handleCalculate = () => {
    const res = calculate();
    if (res !== null && onResult) {
      onResult(res);
    }
  };

  const renderDynamicChart = () => {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' as const, labels: { color: '#000', font: { family: 'monospace' as const, size: 10 } } }
      }
    };

    // ALWAYS show the exact actual inserted values to fulfill user request
    const labels = [...formula.variables.map(v => v.name), 'Result'];
    const data = [...formula.variables.map(v => inputs[v.symbol] || 0), result || 0];
    const bgColors = ['#3498DB', '#E74C3C', '#F39C12', '#2ECC71', '#9B59B6'];

    if (formula.category === 'business') {
      return (
        <Doughnut
          data={{
            labels,
            datasets: [{
              data,
              backgroundColor: bgColors,
              borderWidth: 2,
              borderColor: '#000'
            }]
          }}
          options={commonOptions}
        />
      );
    } else if (formula.category === 'roasting') {
      if (formula.id === 'f-13') { // RoR
        return (
          <Line
            data={{
              labels,
              datasets: [{
                label: 'Values',
                data,
                borderColor: '#E74C3C',
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
              }]
            }}
            options={{
              responsive: true, maintainAspectRatio: false,
              scales: { y: { grid: { color: '#e5e7eb' }, ticks: { font: { family: 'monospace' } } }, x: { grid: { display: false }, ticks: { font: { family: 'monospace' } } } },
              plugins: { legend: { display: false } }
            }}
          />
        );
      }
      return (
        <Pie
          data={{
            labels,
            datasets: [{
              data,
              backgroundColor: bgColors,
              borderWidth: 2, borderColor: '#000'
            }]
          }}
          options={commonOptions}
        />
      );
    } else if (formula.category === 'sensory') {
      return (
        <Radar
          data={{
            labels,
            datasets: [{
              label: 'Values',
              data,
              backgroundColor: 'rgba(52, 152, 219, 0.2)',
              borderColor: '#2980B9',
              pointBackgroundColor: '#2980B9',
              borderWidth: 2
            }]
          }}
          options={{
            responsive: true, maintainAspectRatio: false,
            scales: { r: { min: 0, ticks: { display: false } } },
            plugins: { legend: { display: false } }
          }}
        />
      );
    }

    // Default Fallback Bar Chart for brewing & water
    return (
      <Bar 
        data={{
          labels,
          datasets: [{
            label: 'Actual Values',
            data,
            backgroundColor: bgColors,
            borderWidth: 2,
            borderColor: '#000'
          }]
        }} 
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: { 
            y: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#000', font: { family: 'monospace' } } },
            x: { grid: { display: false }, ticks: { color: '#000', font: { family: 'monospace', weight: 'bold' } } }
          },
          plugins: { legend: { display: false } }
        }}
      />
    );
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
        <div className="bg-[#fdfbf7] border-l-8 border-black p-8 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
          <p className="text-xl font-medium leading-relaxed flush-left mb-6">
            {formula.description}
          </p>
          <Link 
            to={`/formulas/${formula.id}`}
            className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors group"
          >
            READ IN-DEPTH SCIENCE EXPLAINER <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      <div className="bg-black text-white p-8 border-4 border-black relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-9xl -mt-8 -mr-4 pointer-events-none transition-transform group-hover:scale-110 duration-700">
          ƒ
        </div>
        <p className="text-sm tracking-widest text-gray-300 mb-6 font-mono font-bold uppercase">System Equation</p>
        <div className="font-mono text-2xl md:text-3xl lg:text-4xl whitespace-normal break-words pb-4 leading-normal">
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
              type="text"
              value={rawInputs[variable.symbol] || ''}
              onChange={(e) => setInput(variable.symbol, e.target.value)}
              placeholder="e.g. 8, 8.5, 9"
              helperText={`${variable.unit}${variable.notes ? ` • ${variable.notes}` : ''}`}
              helperTextClassName="text-black"
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
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-6xl md:text-8xl font-black tracking-tighter flex items-baseline gap-2 flex-wrap">
                {getResultPrefix(formula.id) && <span className="opacity-50">{getResultPrefix(formula.id)}</span>}
                {formatNumber(result)}
                {getResultSuffix(formula.id) && <span className="text-2xl md:text-4xl opacity-50 ml-1">{getResultSuffix(formula.id)}</span>}
              </span>
              <p className="text-sm opacity-90 mt-4 font-mono">
                SUCCESSFUL EVALUATION OF [ {formula.id} ]
              </p>
              {(() => {
                const evaluation = evaluateResult(formula.id, result);
                if (!evaluation) return null;
                const typeColors = {
                  poor: 'bg-[#E74C3C] text-white',
                  warning: 'bg-[#F39C12] text-black',
                  neutral: 'bg-[#95A5A6] text-black',
                  good: 'bg-[#3498DB] text-white',
                  great: 'bg-[#2ECC71] text-black',
                };
                return (
                  <div className={`mt-6 inline-block px-4 py-2 text-sm md:text-base font-mono font-bold uppercase tracking-wider ${typeColors[evaluation.type]} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    STATUS: {evaluation.text}
                  </div>
                );
              })()}
            </div>
            <div className="w-full lg:w-1/2 h-56 bg-white text-black p-4 border-2 border-black">
              {renderDynamicChart()}
            </div>
          </div>
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
                  <p className="text-2xl font-black text-accent flex items-baseline gap-1">
                    {getResultPrefix(formula.id) && <span className="opacity-50">{getResultPrefix(formula.id)}</span>}
                    {formatNumber(example.output)}
                    {getResultSuffix(formula.id) && <span className="text-lg opacity-50">{getResultSuffix(formula.id)}</span>}
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
