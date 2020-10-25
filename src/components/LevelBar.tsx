import React from 'react';

interface LevelBarProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export const LevelBar: React.FC<LevelBarProps> = ({ level }) => {
  const levelsClassNames = new Array(5)
    .fill('bg-black rounded-lg h-2')
    .map((className, idx) => (idx + 1 <= level ? `${className} bg-black` : `${className} bg-gray-400`));

  return (
    <div className="grid grid-cols-5 gap-2">
      {levelsClassNames.map((className) => (
        <div className={className}></div>
      ))}
    </div>
  );
};
