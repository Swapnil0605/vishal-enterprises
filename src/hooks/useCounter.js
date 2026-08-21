import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCounter = (targetValue, duration = 2) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const obj = { value: 0 };
        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    value: targetValue,
                    duration,
                    ease: 'power2.out',
                    onUpdate: () => {
                        setCount(Math.floor(obj.value));
                    }
                });
            }
        });

        return () => trigger.kill();
    }, [targetValue, duration]);

    return { count, elementRef };
};
