import { useState, useCallback } from 'react';
import { Formula } from '@/types';

interface CalculatorState {
  formula: Formula | null;
  inputs: Record<string, number>;
  result: number | null;
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    formula: null,
    inputs: {},
    result: null,
  });

  const setFormula = useCallback((formula: Formula) => {
    const initialInputs: Record<string, number> = {};
    formula.variables.forEach((v) => {
      initialInputs[v.symbol] = 0;
    });

    setState({
      formula,
      inputs: initialInputs,
      result: null,
    });
  }, []);

  const setInput = useCallback((symbol: string, value: number) => {
    setState((prev) => ({
      ...prev,
      inputs: {
        ...prev.inputs,
        [symbol]: value,
      },
    }));
  }, []);

  const calculate = useCallback(() => {
    if (!state.formula) return null;

    const { formula, inputs } = state;
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

    setState((prev) => ({
      ...prev,
      result,
    }));

    return result;
  }, [state]);

  const reset = useCallback(() => {
    const initialInputs: Record<string, number> = {};
    if (state.formula) {
      state.formula.variables.forEach((v) => {
        initialInputs[v.symbol] = 0;
      });
    }

    setState({
      formula: state.formula,
      inputs: initialInputs,
      result: null,
    });
  }, [state.formula]);

  return {
    formula: state.formula,
    inputs: state.inputs,
    result: state.result,
    setFormula,
    setInput,
    calculate,
    reset,
  };
}
