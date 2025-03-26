
import React from 'react';
import { Check } from "lucide-react";
import WhatsappButton from './WhatsappButton';
import { cn } from '@/lib/utils';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanProps {
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  phoneNumber: string;
}

const PlanCard: React.FC<PlanProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  phoneNumber
}) => {
  return (
    <div className={cn(
      "glass relative rounded-xl p-6 overflow-hidden transition-all duration-300 hover:scale-105",
      "flex flex-col h-full border border-white/30",
      popular ? "shadow-lg shadow-s4-purple/20" : ""
    )}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="s4-gradient-bg text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
            Mais Popular
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-white/70 ml-1">/site</span>
      </div>
      
      <p className="text-white/80 mb-6 text-sm">{description}</p>
      
      <div className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={cn(
              "mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
              feature.included ? "bg-green-500/20" : "bg-gray-500/20"
            )}>
              {feature.included && <Check size={12} className="text-green-500" />}
            </div>
            <span className={cn(
              "text-sm",
              feature.included ? "text-white" : "text-white/50 line-through"
            )}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <WhatsappButton 
          phoneNumber={phoneNumber} 
          text="Contratar Agora" 
          className={cn(
            "w-full justify-center",
            popular ? "from-s4-blue via-s4-purple to-s4-pink bg-gradient-to-r" : ""
          )}
        />
      </div>
    </div>
  );
};

const Plans: React.FC = () => {
  const phoneNumber = "+5554996378496";
  
  const plans = [
    {
      title: "Plano Básico",
      price: "R$799",
      description: "Ideal para pequenos negócios que precisam de uma presença online simples e eficiente.",
      features: [
        { text: "Layout responsivo", included: true },
        { text: "Até 5 páginas", included: true },
        { text: "Domínio personalizado", included: true },
        { text: "SEO básico", included: true },
        { text: "Formulário de contato", included: true },
        { text: "Design personalizado", included: false },
        { text: "Integrações avançadas", included: false },
        { text: "Área administrativa", included: false },
      ],
      popular: false
    },
    {
      title: "Plano Padrão",
      price: "R$1.499",
      description: "Perfeito para empresas que buscam um site profissional com mais recursos e personalização.",
      features: [
        { text: "Layout responsivo", included: true },
        { text: "Até 10 páginas", included: true },
        { text: "Domínio personalizado", included: true },
        { text: "SEO avançado", included: true },
        { text: "Formulário de contato", included: true },
        { text: "Design personalizado", included: true },
        { text: "Integrações avançadas", included: true },
        { text: "Área administrativa", included: false },
      ],
      popular: true
    },
    {
      title: "Plano Avançado",
      price: "R$2.799",
      description: "Solução completa para empresas que precisam de um site robusto com recursos avançados.",
      features: [
        { text: "Layout responsivo", included: true },
        { text: "Páginas ilimitadas", included: true },
        { text: "Domínio personalizado", included: true },
        { text: "SEO avançado", included: true },
        { text: "Formulário de contato", included: true },
        { text: "Design personalizado", included: true },
        { text: "Integrações avançadas", included: true },
        { text: "Área administrativa", included: true },
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24" id="plans">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-48 h-48 rounded-full bg-s4-pink/10 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-s4-blue/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 s4-gradient-text">
            Escolha o plano ideal para o seu projeto
          </h2>
          <p className="text-white/80">
            Da presença online básica a soluções completas para seu negócio, 
            temos o plano perfeito para transformar suas ideias em realidade digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              phoneNumber={phoneNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
