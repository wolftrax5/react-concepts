import { useState, useEffect } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCount] = useState(5);
  const handlerClick = (value: number) => {
    setCount((prevCount) => Math.min(prevCount + value, MAXIMUM_COUNT));
  };
  useEffect(() => {
    //effect
    if (counter < MAXIMUM_COUNT) return;
    console.log(
      "%cSe logro el valor Maximo Valor",
      "background-color: green; color: white; font-size: 20px;"
    );
  }, [counter]);

  return (
    <>
      <h1>Counter Effect: {counter}</h1>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(1)}>+</button>
    </>
  );
};
