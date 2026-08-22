import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const isMobile = window.innerWidth < 768;
        const targets = el.querySelectorAll('.gs-animate');
        
        const ctx = gsap.context(() => {
            targets.forEach((target) => {
                const animationType = target.dataset.animate || 'fade-up';
                const delay = parseFloat(target.dataset.delay || 0) / 1000;

                let fromVars = { 
                    opacity: 0, 
                    duration: isMobile ? 0.6 : 0.8, 
                    ease: 'power3.out', 
                    delay: isMobile ? 0 : delay 
                };

                if (animationType === 'fade-up') {
                    fromVars.y = isMobile ? 24 : 36;
                } else if (animationType === 'fade-left') {
                    fromVars.x = isMobile ? 0 : 36;
                    if (isMobile) fromVars.y = 20;
                } else if (animationType === 'fade-right') {
                    fromVars.x = isMobile ? 0 : -36;
                    if (isMobile) fromVars.y = 20;
                } else if (animationType === 'fade-in') {
                    fromVars.scale = 0.96;
                }

                gsap.from(target, {
                    ...fromVars,
                    scrollTrigger: {
                        trigger: target,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true
                    }
                });
            });
        }, el);

        return () => ctx.revert();
    }, []); // Runs once on mount to prevent animation resetting on re-render

    return containerRef;
};
