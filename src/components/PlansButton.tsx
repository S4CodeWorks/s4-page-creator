
import React from 'react';
import { cn } from "@/lib/utils";

interface PlansButtonProps {
  className?: string;
}

const PlansButton: React.FC<PlansButtonProps> = ({ className }) => {
  return (
    <button
      className={cn(
        "relative group overflow-hidden rounded-full py-3 px-6",
        "bg-gradient-to-r from-s4-blue via-s4-purple to-s4-pink",
        "hover:shadow-lg transition-all duration-300 transform hover:scale-105",
        "font-medium text-white",
        className
      )}
    >
      <span className="relative z-10">Ver Planos</span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-s4-purple via-s4-pink to-s4-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </button>
  );
};

export default PlansButton;
