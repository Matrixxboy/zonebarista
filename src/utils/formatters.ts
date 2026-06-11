export function formatNumber(value: number, decimals = 2): string {
  return value.toFixed(decimals);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatDate(date: Date | number): string {
  const d = typeof date === 'number' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(ms: number): string {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

export function truncate(text: string, length: number): string {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function getResultPrefix(id: string): string {
  if (id === 'f-01') return '1:';
  if (id === 'f-15') return '$';
  return '';
}

export function getResultSuffix(id: string): string {
  if (['f-02', 'f-11', 'f-12', 'f-14', 'f-18'].includes(id)) return '%';
  if (id === 'f-03') return 'g';
  if (['f-07', 'f-08'].includes(id)) return ' mg/L';
  if (id === 'f-13') return ' °C/min';
  if (id === 'f-23') return ' pts';
  return '';
}
