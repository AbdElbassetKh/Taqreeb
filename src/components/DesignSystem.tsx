import React, { createContext, useContext, ReactNode } from 'react';
import classNames from 'classnames';

// Theme Context
const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = {}; // Define theme properties if needed
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// Button Component
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ children, onClick, variant = 'primary', size = 'medium' }: ButtonProps) => {
  const buttonClass = classNames(
    'rounded-lg transition focus:outline-none focus:ring-2',
    {
      'bg-emerald-600 text-white hover:bg-emerald-700': variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
      'px-4 py-2': size === 'medium',
      'px-3 py-1 text-sm': size === 'small',
      'px-5 py-3 text-lg': size === 'large',
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

// Input Component
interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
};

// Typography Components
interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: TypographyProps) => (
  <h1 className={classNames('text-3xl font-bold text-gray-800', className)}>{children}</h1>
);

export const Subheading = ({ children, className }: TypographyProps) => (
  <h2 className={classNames('text-2xl font-semibold text-gray-700', className)}>{children}</h2>
);

export const Paragraph = ({ children, className }: TypographyProps) => (
  <p className={classNames('text-gray-600', className)}>{children}</p>
);

// Export all components
export { ThemeProvider, Button, Input, Heading, Subheading, Paragraph };
