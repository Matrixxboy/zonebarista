import { Calculation } from '@/types';

export function downloadCSV(csvContent: string, filename = 'calculations.csv') {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadJSON(jsonContent: string, filename = 'calculations.json') {
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generateCSV(calculations: Calculation[]): string {
  if (calculations.length === 0) return '';

  const headers = ['ID', 'Formula ID', 'Inputs', 'Result', 'Date', 'Time'];
  const rows = calculations.map((c) => {
    const date = new Date(c.timestamp);
    return [
      c.id,
      c.formulaId,
      JSON.stringify(c.inputs),
      c.result.toFixed(2),
      date.toLocaleDateString(),
      date.toLocaleTimeString(),
    ];
  });

  const allRows = [headers, ...rows];
  return allRows.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
}

export function generateJSON(calculations: Calculation[]): string {
  return JSON.stringify(calculations, null, 2);
}
