import { ReactNode } from 'react';

interface GridPatternProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
  size?: '16' | '24' | '32';
}

function GridPattern({
  children,
  className = '',
  opacity = 3,
  size = '24',
}: GridPatternProps) {
  const sizeMap = {
    16: '16px',
    24: '24px',
    32: '32px',
  };

  const opacityValue = opacity / 100;

  const backgroundImage = `
    linear-gradient(0deg, rgba(0, 0, 0, ${opacityValue}) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, ${opacityValue}) 1px, transparent 1px)
  `;

  return (
    <div
      className={`grid-pattern ${className}`}
      style={{
        backgroundImage,
        backgroundSize: `${sizeMap[size]} ${sizeMap[size]}`,
      }}
    >
      {children}
    </div>
  );
}

export default GridPattern;
