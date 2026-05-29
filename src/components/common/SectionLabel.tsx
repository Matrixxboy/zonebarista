interface SectionLabelProps {
  number: string | number;
  text: string;
  className?: string;
  inverted?: boolean;
}

function SectionLabel({ number, text, className = '', inverted = false }: SectionLabelProps) {
  return (
    <h2 className={`section-label ${inverted ? 'text-white' : ''} ${className}`}>
      <span className={`section-label-number ${inverted ? 'text-gray-300' : ''}`}>{String(number).padStart(2, '0')}.</span>
      {' '}
      {text}
    </h2>
  );
}

export default SectionLabel;
