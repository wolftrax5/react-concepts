import { useState } from "react";
interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCount] = useState(initialValue);
  const handlerClick = (value: number) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(1)}>+</button>
    </>
  );
};
