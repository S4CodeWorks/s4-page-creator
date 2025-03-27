
import React from 'react';
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsappButtonProps {
  phoneNumber: string;
  className?: string;
  text?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ 
  phoneNumber, 
  className,
  text = "Contato" 
}) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 py-2.5 px-5 rounded-full glass hover:scale-105 transition-all duration-300",
        "border border-white/30 text-white font-medium shadow-lg",
        "hover:shadow-s4-blue/20 hover:border-white/50",
        className
      )}
    >
      <MessageCircle size={20} className="text-green-500" />
      <span>{text}</span>
    </a>
  );
};

export default WhatsappButton;
