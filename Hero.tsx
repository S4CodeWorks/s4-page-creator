
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import CodeAnimation from "./CodeAnimation";
import PlansButton from "./PlansButton";
import { ArrowRight, Code, Layout, Palette } from "lucide-react";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-background to-background/70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-s4-blue/20 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-s4-purple/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium text-white border border-white/30 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Desenvolvimento Web Premium
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <AnimatedText 
                text="Transformando"
                delay={0.5}
                className="block"
              />
              <AnimatedText 
                text="ideias em"
                delay={0.8}
                className="block"
              />
              <AnimatedText 
                text="experiências digitais"
                delay={1.1}
                className="block s4-gradient-text"
                textGradient
              />
            </h1>
            
            <p className="text-lg text-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              A S4 CodeWorks cria páginas personalizadas que elevam sua presença online com design exclusivo e tecnologia de ponta.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
              <PlansButton />
              
              <button 
                onClick={scrollToAbout} 
                className="group flex items-center gap-2 py-3 px-1 font-medium text-foreground hover:text-s4-blue transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center sm:items-start gap-2 p-4 glass rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                  <Code size={24} className="text-s4-blue" />
                </div>
                <h3 className="font-medium text-white">Código Limpo</h3>
                <p className="text-sm text-white/80">Desenvolvimento eficiente e optimizado</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start gap-2 p-4 glass rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                  <Palette size={24} className="text-s4-purple" />
                </div>
                <h3 className="font-medium text-white">Design Exclusivo</h3>
                <p className="text-sm text-white/80">Interfaces únicas e personalizadas</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start gap-2 p-4 glass rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                  <Layout size={24} className="text-s4-pink" />
                </div>
                <h3 className="font-medium text-white">Responsivo</h3>
                <p className="text-sm text-white/80">Perfeito em todos os dispositivos</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "lg:w-1/2 flex justify-center items-center",
            loaded ? "animate-scale-in" : "opacity-0"
          )}>
            <CodeAnimation className="w-full max-w-md shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
