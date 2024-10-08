import { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState<number>(0);
  const [start,setStart]= useState<boolean>(false);


  useEffect(()=>{

    if(start){

      setCount(count+1);
    }

  },[count,start])



  return (
    <div>
      {count}
      <button onClick={()=>setStart(true)}>Start</button>
      <button onClick={()=>setStart(false)}>Stop</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
  );
};

export default Stopwatch;
