
import React from 'react';
import { Info, Shield, HelpCircle, MessageCircle } from "lucide-react";
import WhatsappButton from './WhatsappButton';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  id?: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id = "about", className }) => {
  return (
    <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24 relative", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background to-background/70 z-0"></div>
      <div className="absolute top-40 left-10 w-48 h-48 rounded-full bg-s4-blue/10 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-s4-purple/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 s4-gradient-text inline-block">Sobre a S4 CodeWorks</h2>
          <p className="text-lg text-foreground/90">
            Conheça mais sobre nossa marca e como trabalhamos para transformar suas ideias em realidade digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-8 rounded-xl hover:shadow-lg hover:shadow-s4-blue/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                <Info size={24} className="text-s4-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Nossa História</h3>
                <p className="text-foreground/80">
                  A S4 CodeWorks é uma marca amadora e iniciante, criada recentemente com o propósito de 
                  oferecer soluções web personalizadas e acessíveis. Nascemos da paixão por transformar ideias 
                  em experiências digitais memoráveis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-xl hover:shadow-lg hover:shadow-s4-purple/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                <Shield size={24} className="text-s4-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Como Funcionamos</h3>
                <p className="text-foreground/80">
                  Nossos planos são desenvolvidos para atender diferentes necessidades. O valor investido 
                  em cada plano é direcionado para o seu projeto, incluindo a compra de domínios, hospedagem 
                  e outros recursos necessários para a criação da sua página web.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass p-8 rounded-xl hover:shadow-lg hover:shadow-s4-pink/10 transition-all duration-300 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
              <Shield size={24} className="text-s4-pink" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Direitos Autorais</h3>
              <p className="text-foreground/80">
                Qualquer uso não autorizado da imagem da S4 CodeWorks ou dos códigos das páginas desenvolvidas é estritamente 
                proibido. Todo o conteúdo criado pela nossa equipe está protegido por direitos autorais.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="glass p-8 rounded-xl hover:shadow-lg hover:shadow-s4-blue/10 transition-all duration-300 max-w-md">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center shadow-lg">
                <HelpCircle size={24} className="text-s4-orange" />
              </div>
              <h3 className="text-xl font-semibold">Tem alguma dúvida?</h3>
              <p className="text-foreground/80 mb-4">
                Estamos sempre à disposição para esclarecer qualquer dúvida ou resolver problemas relacionados aos nossos serviços.
              </p>
              <WhatsappButton phoneNumber="+5554996378496" text="Falar com suporte" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
