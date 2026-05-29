import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

function Input({
  label,
  error,
  helperText,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold uppercase tracking-tight mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          input-field
          ${error ? 'border-accent' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-accent text-xs font-semibold mt-1 uppercase tracking-tight">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="text-muted text-xs mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
