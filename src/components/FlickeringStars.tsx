
import React from 'react';

const FlickeringStars = ({ numberOfStars = 100 }: { numberOfStars?: number }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: numberOfStars }).map((_, i) => {
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        };
        return <div key={i} className="absolute rounded-full bg-white/80 animate-flicker" style={style} />;
      })}
    </div>
  );
};

export default FlickeringStars;
