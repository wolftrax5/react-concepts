import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handlerClick } = useCounter({
    maxCount: 10,
  });
  return (
    <>
      <h1>Counter Hook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(1)}>+</button>
    </>
  );
};
