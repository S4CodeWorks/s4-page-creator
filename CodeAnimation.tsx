
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

type CodeSnippet = {
  language: string;
  code: string;
};

const codeSnippets: CodeSnippet[] = [
  {
    language: 'HTML',
    code: '<div class="s4-container">\n  <h1>S4 CodeWorks</h1>\n  <p>Criando experiências digitais</p>\n  <button class="s4-button">Ver Planos</button>\n</div>'
  },
  {
    language: 'CSS',
    code: '.s4-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  backdrop-filter: blur(8px);\n}\n\n.s4-button {\n  background: linear-gradient(to right, #00C2FF, #6600FF);\n}'
  },
  {
    language: 'JavaScript',
    code: 'const fadeIn = (element) => {\n  element.style.opacity = "0";\n  let opacity = 0;\n  const interval = setInterval(() => {\n    opacity += 0.1;\n    element.style.opacity = opacity;\n    if (opacity >= 1) clearInterval(interval);\n  }, 50);\n};'
  },
  {
    language: 'React',
    code: 'function Button({ children }) {\n  return (\n    <button className="s4-button">\n      {children}\n      <span className="s4-button-shine" />\n    </button>\n  );\n}'
  }
];

interface CodeAnimationProps {
  className?: string;
}

const CodeAnimation: React.FC<CodeAnimationProps> = ({ className }) => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [languageClass, setLanguageClass] = useState('text-s4-blue');
  
  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case 'html':
        return 'text-s4-orange';
      case 'css':
        return 'text-s4-blue';
      case 'javascript':
        return 'text-s4-yellow';
      case 'react':
        return 'text-s4-blue';
      default:
        return 'text-white';
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex];
    setCodeLines(currentSnippet.code.split('\n'));
    setLanguageClass(getLanguageColor(currentSnippet.language));
  }, [currentSnippetIndex]);
  
  return (
    <div className={cn(
      "font-code rounded-xl overflow-hidden glass-dark p-6 w-full max-w-md border border-white/10",
      "shadow-[0_0_15px_rgba(0,194,255,0.15)] hover:shadow-[0_0_25px_rgba(0,194,255,0.25)] transition-all duration-500",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className={cn("text-sm font-semibold px-3 py-1 rounded-full glass", languageClass)}>
          {codeSnippets[currentSnippetIndex].language}
        </div>
      </div>
      <div className="text-gray-200 text-xs space-y-1 mt-3">
        {codeLines.map((line, index) => (
          <div 
            key={index} 
            className="code-line animate-code-slide-up opacity-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeAnimation;
