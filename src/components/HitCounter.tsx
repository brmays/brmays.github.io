
import React, { useState, useEffect } from 'react';

const HitCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Generate a random number between 10000 and 99999
    const randomCount = Math.floor(Math.random() * 90000) + 10000;
    setCount(randomCount);
  }, []);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-xs font-pixel text-gray-600">YOU ARE VISITOR #</div>
      <div className="font-pixel text-black bg-white px-2 py-1 border border-black">
        {count.toString().padStart(6, '0')}
      </div>
    </div>
  );
};

export default HitCounter;
