import { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = ()=>{
    const [counter, setCount] = useState(5);

    const handlerClick = (value: number) => {
        setCount((prevCount) => Math.min(prevCount + value, MAXIMUM_COUNT));
    };
    const counterElement = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      //effect
    if (counter < MAXIMUM_COUNT) return;
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

    return{
        counter,
        elementToAnimate:counterElement,
        handlerClick
    }
}