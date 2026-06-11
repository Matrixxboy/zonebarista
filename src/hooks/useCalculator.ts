import { useState, useCallback } from 'react';
import { Formula } from '@/types';

interface CalculatorState {
  formula: Formula | null;
  inputs: Record<string, number>;
  rawInputs: Record<string, string>;
  result: number | null;
}

function calculateFormulaResult(formula: Formula | null, inputs: Record<string, number>): number | null {
  if (!formula) return null;

  const variables = formula.variables.map((v) => v.symbol);
  if (variables.some((v) => inputs[v] === undefined || Number.isNaN(inputs[v]))) {
    return null;
  }

  let result: number = 0;

  if (formula.id === 'f-01') {
    result = inputs.Y / inputs.D;
  } else if (formula.id === 'f-02') {
    result = (inputs.TDS * inputs.BM) / inputs.DCM;
  } else if (formula.id === 'f-03') {
    result = (inputs.TDS * inputs.BM) / 100;
  } else if (formula.id === 'f-07') {
    result = inputs.Ca * 2.497 + inputs.Mg * 4.118;
  } else if (formula.id === 'f-08') {
    result = inputs.HCO3 * 0.82;
  } else if (formula.id === 'f-11') {
    result = (inputs.FC / inputs.TR) * 100;
  } else if (formula.id === 'f-12') {
    result = ((inputs.GW - inputs.RW) / inputs.GW) * 100;
  } else if (formula.id === 'f-13') {
    result = inputs.DT / inputs.Dt;
  } else if (formula.id === 'f-14') {
    result = (inputs.COGS / inputs.Price) * 100;
  } else if (formula.id === 'f-15') {
    result = inputs.COGS / (inputs.Target / 100);
  } else if (formula.id === 'f-18') {
    result = ((inputs.COGS + inputs.Labor) / inputs.Revenue) * 100;
  } else if (formula.id === 'f-23') {
    result = inputs.Attr - inputs.Defects;
  }

  if (Number.isNaN(result) || !Number.isFinite(result)) {
    return 0; // fallback for divide-by-zero
  }

  return result;
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    formula: null,
    inputs: {},
    rawInputs: {},
    result: null,
  });

  const setFormula = useCallback((formula: Formula) => {
    const initialInputs: Record<string, number> = {};
    const initialRawInputs: Record<string, string> = {};
    formula.variables.forEach((v) => {
      initialInputs[v.symbol] = 0;
      initialRawInputs[v.symbol] = '';
    });

    setState({
      formula,
      inputs: initialInputs,
      rawInputs: initialRawInputs,
      result: calculateFormulaResult(formula, initialInputs),
    });
  }, []);

  const setInput = useCallback((symbol: string, rawValue: string) => {
    setState((prev) => {
      // Split by comma, parse floats, and sum them
      const parts = rawValue.split(',').map(p => parseFloat(p.trim()));
      const sum = parts.reduce((acc, val) => acc + (Number.isNaN(val) ? 0 : val), 0);

      const newInputs = {
        ...prev.inputs,
        [symbol]: sum,
      };
      
      const newRawInputs = {
        ...prev.rawInputs,
        [symbol]: rawValue,
      };

      return {
        ...prev,
        inputs: newInputs,
        rawInputs: newRawInputs,
        result: calculateFormulaResult(prev.formula, newInputs),
      };
    });
  }, []);

  const calculate = useCallback(() => {
    if (!state.formula) return null;
    const res = calculateFormulaResult(state.formula, state.inputs);
    setState((prev) => ({
      ...prev,
      result: res,
    }));
    return res;
  }, [state]);

  const reset = useCallback(() => {
    const initialInputs: Record<string, number> = {};
    const initialRawInputs: Record<string, string> = {};
    if (state.formula) {
      state.formula.variables.forEach((v) => {
        initialInputs[v.symbol] = 0;
        initialRawInputs[v.symbol] = '';
      });
    }

    setState({
      formula: state.formula,
      inputs: initialInputs,
      rawInputs: initialRawInputs,
      result: calculateFormulaResult(state.formula, initialInputs),
    });
  }, [state.formula]);

  return {
    formula: state.formula,
    inputs: state.inputs,
    rawInputs: state.rawInputs,
    result: state.result,
    setFormula,
    setInput,
    calculate,
    reset,
  };
}
