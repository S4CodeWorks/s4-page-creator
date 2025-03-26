
import React from 'react';
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsappButtonProps {
  phoneNumber: string;
  className?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, className }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 py-2 px-4 rounded-full glass hover:scale-105 transition-all duration-300",
        "border border-white/20 text-white font-medium",
        "animate-pulse-soft hover:animate-none",
        className
      )}
    >
      <MessageCircle size={20} className="text-green-500" />
      <span>Contato</span>
    </a>
  );
};

export default WhatsappButton;
