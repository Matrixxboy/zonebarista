interface SectionLabelProps {
  number: string | number;
  text: string;
  className?: string;
}

function SectionLabel({ number, text, className = '' }: SectionLabelProps) {
  return (
    <h2 className={`section-label ${className}`}>
      <span className="section-label-number">{String(number).padStart(2, '0')}.</span>
      {' '}
      {text}
    </h2>
  );
}

export default SectionLabel;
