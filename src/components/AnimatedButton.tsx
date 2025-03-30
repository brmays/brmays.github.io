
import { Button } from "@/components/ui/button";
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({ children, onClick, className }: AnimatedButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      className={`animate-bounce font-comic text-lg border-2 border-black bg-bright-yellow text-black hover:bg-hot-pink hover:text-white transition-colors ${className}`}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;
