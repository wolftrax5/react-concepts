import { useState } from "react";
interface CounterByProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: CounterByProps) => {
  const [{ clicks, counter }, setCount] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handlerClick = (value: number) => {
    setCount(({ counter: prevCounter, clicks: prevClicks }) => ({
      counter: prevCounter + value,
      clicks: prevClicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>CounterBy Clicks: {clicks}</h1>

      <button
        onClick={() =>
          setCount({
            counter: initialValue,
            clicks: 0,
          })
        }
      >
        Reset
      </button>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(1)}>+</button>
    </>
  );
};
