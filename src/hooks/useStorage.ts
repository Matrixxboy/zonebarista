import { useState, useCallback, useEffect } from 'react';
import { Calculation } from '@/types';

export function useStorage() {
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('zone-barista-calculations');
    if (stored) {
      try {
        setCalculations(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse stored calculations', error);
      }
    }
  }, []);

  const saveCalculation = useCallback(
    (calculation: Calculation) => {
      const updated = [calculation, ...calculations].slice(0, 100);
      setCalculations(updated);
      localStorage.setItem('zone-barista-calculations', JSON.stringify(updated));
      return calculation.id;
    },
    [calculations],
  );

  const deleteCalculation = useCallback(
    (id: string) => {
      const updated = calculations.filter((c) => c.id !== id);
      setCalculations(updated);
      localStorage.setItem('zone-barista-calculations', JSON.stringify(updated));
    },
    [calculations],
  );

  const clearAll = useCallback(() => {
    setCalculations([]);
    localStorage.removeItem('zone-barista-calculations');
  }, []);

  const exportCSV = useCallback(() => {
    if (calculations.length === 0) return '';

    const headers = ['ID', 'Formula ID', 'Inputs', 'Result', 'Timestamp'];
    const rows = calculations.map((c) => [
      c.id,
      c.formulaId,
      JSON.stringify(c.inputs),
      c.result,
      new Date(c.timestamp).toISOString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
    return csv;
  }, [calculations]);

  const exportJSON = useCallback(() => {
    return JSON.stringify(calculations, null, 2);
  }, [calculations]);

  return {
    calculations,
    saveCalculation,
    deleteCalculation,
    clearAll,
    exportCSV,
    exportJSON,
  };
}
