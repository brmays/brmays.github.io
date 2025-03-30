
import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee = ({ text, className }: MarqueeProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className={`animate-marquee inline-block ${className}`}>
        {text}
      </div>
    </div>
  );
};

export default Marquee;
