import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count < 10) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);

      const newf=()=>{
        console.log("Nice");
      }

      newf();

      return () => clearTimeout(timer);
    }
  }, [count]);

  return <div>{count === 10 ? "Reached 10" : count}</div>;
};

export default Stopwatch;
