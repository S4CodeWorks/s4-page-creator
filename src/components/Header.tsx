
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import WhatsappButton from "./WhatsappButton";
import { Code } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        "flex items-center justify-between",
        scrolled ? "glass backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center space-x-2">
        <img 
          src="/lovable-uploads/82b6e8df-d54f-4730-8449-ce8a0627905f.png" 
          alt="S4 Logo" 
          className="w-12 h-auto" 
        />
        <div className="flex items-center">
          <span className="text-xl font-semibold s4-gradient-text">Code</span>
          <div className="relative flex items-center">
            <span className="text-xl font-semibold s4-gradient-text">Works</span>
            <Code 
              size={18} 
              className="absolute -right-6 top-0 text-s4-blue animate-pulse-soft"
            />
          </div>
        </div>
      </div>
      
      <WhatsappButton phoneNumber="+5554996378496" />
    </header>
  );
};

export default Header;
