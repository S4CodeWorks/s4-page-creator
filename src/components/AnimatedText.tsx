
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  textGradient?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  textGradient = false,
  delay = 0 
}) => {
  const letters = text.split('');
  
  return (
    <span className={cn("inline-block overflow-hidden", className)}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={cn(
            "inline-block animate-slide-up opacity-0",
            textGradient && "s4-gradient-text"
          )}
          style={{
            animationDelay: `${delay + index * 0.05}s`,
            animationFillMode: 'forwards',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
