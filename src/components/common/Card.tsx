import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'outline';
  border?: 'thin' | 'thick';
}

function Card({
  children,
  className = '',
  variant = 'default',
  border = 'thin',
}: CardProps) {
  const variantClasses = {
    default: 'bg-white',
    muted: 'bg-muted',
    outline: 'bg-white',
  };

  const borderClasses = {
    thin: 'border-2 border-black',
    thick: 'border-4 border-black',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${borderClasses[border]}
        p-6 rounded-none
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
