import React, { useState, useEffect } from 'react';

const CustomLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'JUSTBUYIT';
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (letterIndex < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }, 800);
    }
  }, [letterIndex, onComplete, fullText]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-white mb-8 font-mono">
          {currentText.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s',
              }}
            >
              {letter}
            </span>
          ))}
          <span className="animate-pulse text-yellow-400">|</span>
        </div>
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
        <p className="text-white/70 mt-4 text-lg animate-fade-in">
          Loading amazing shopping experience...
        </p>
      </div>
    </div>
  );
};

export default CustomLoader;