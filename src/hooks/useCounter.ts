/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1})=>{
    const [counter, setCount] = useState(5);

    const handlerClick = (value: number) => {
        setCount((prevCount) => Math.min(prevCount + value, maxCount));
    };
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());
    useLayoutEffect(() => {
        if(!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, {
            y: -10,
            duration: 0.2,
            ease: "ease.out",
        }).to(elementToAnimate.current, {
            y: 0,
            duration: 1,
            ease: "bounce.out",
        }).pause();
        return () => {
        };
    }, []);

    useEffect(() => {
        if (counter < maxCount) return;
        tl.current.play(0);
    }, [counter])


    return{
        counter,
        elementToAnimate,
        handlerClick
    }
}