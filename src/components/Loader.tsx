import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const text = "LOADING...";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block text-4xl md:text-6xl font-bold text-white animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s'
              }}
            >
              {char === '.' ? '.' : char}
            </span>
          ))}
        </div>
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/80 mt-4 text-lg">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;