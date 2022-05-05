import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCount] = useState(5);
  const handlerClick = (value: number) => {
    setCount((prevCount) => Math.min(prevCount + value, MAXIMUM_COUNT));
  };
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    //effect
    if (counter < MAXIMUM_COUNT) return;
    console.log(
      "%cSe logro el valor Maximo Valor",
      "background-color: green; color: white; font-size: 20px;"
    );
    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(1)}>+</button>
    </>
  );
};
