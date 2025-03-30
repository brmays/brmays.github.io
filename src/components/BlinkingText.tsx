
import React from 'react';

interface BlinkingTextProps {
  children: React.ReactNode;
  className?: string;
}

const BlinkingText = ({ children, className }: BlinkingTextProps) => {
  return (
    <span className={`animate-blink inline-block ${className}`}>
      {children}
    </span>
  );
};

export default BlinkingText;
