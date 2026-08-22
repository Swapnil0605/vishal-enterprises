import React, { useRef, useEffect } from 'react';
import { productsData } from '../../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Products.css';

export const Products = () => {
    const sectionRef = useScrollAnimation();
    const trackRef = useRef(null);
    const progressBarRef = useRef(null);
    
    // Non-re-rendering drag refs for 60fps performance
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const rafIdRef = useRef(null);

    const updateProgressDirect = () => {
        if (!trackRef.current || !progressBarRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll > 0) {
            const currentProgress = (scrollLeft / maxScroll) * 100;
            const clamped = Math.min(100, Math.max(12, currentProgress));
            progressBarRef.current.style.width = `${clamped}%`;
        } else {
            progressBarRef.current.style.width = '100%';
        }
    };

    const handleScroll = () => {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(updateProgressDirect);
    };

    const scroll = (direction) => {
        if (!trackRef.current) return;
        const card = trackRef.current.querySelector('.product-card');
        const gap = 24;
        const scrollAmount = card ? card.offsetWidth + gap : 360;
        trackRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    // Mouse drag handlers without triggering React state re-renders
    const handleMouseDown = (e) => {
        isDraggingRef.current = true;
        startXRef.current = e.pageX - trackRef.current.offsetLeft;
        scrollLeftRef.current = trackRef.current.scrollLeft;
        if (trackRef.current) {
            trackRef.current.classList.add('dragging');
        }
    };

    const handleMouseLeave = () => {
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.classList.remove('dragging');
        }
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.classList.remove('dragging');
        }
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current || !trackRef.current) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5;
        trackRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    useEffect(() => {
        updateProgressDirect();
        window.addEventListener('resize', updateProgressDirect);
        return () => {
            window.removeEventListener('resize', updateProgressDirect);
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        };
    }, []);

    return (
        <section className="products" id="products" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header gs-animate" data-animate="fade-up">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>Featured Product Range</span>
                    </div>
                    <h2 className="section-title">
                        Custom Engineered <span className="title-accent">Control Solutions</span>
                    </h2>
                    <p className="section-subtitle">
                        Precision control panels, annunciators, and industrial electronic equipment built to rigorous customer specifications and safety standards.
                    </p>
                </div>

                {/* Slider and Controls */}
                <div className="products-slider-wrapper">
                    <div 
                        className="products-track"
                        ref={trackRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {productsData.map((prod) => (
                            <div key={prod.id} className="product-card">
                                <div className="product-img">
                                    <img src={prod.image} alt={prod.title} draggable={false} loading="lazy" />
                                    <span className="product-category-tag">{prod.category}</span>
                                </div>
                                <div className="product-info">
                                    <h4>{prod.title}</h4>
                                    <p>{prod.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="products-scroll-controls">
                        <button 
                            className="scroll-btn scroll-btn-prev" 
                            onClick={() => scroll('prev')}
                            aria-label="View Previous Products"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        
                        <div className="scroll-progress">
                            <div 
                                className="scroll-progress-bar" 
                                ref={progressBarRef}
                                style={{ width: '12%' }}
                            ></div>
                        </div>

                        <button 
                            className="scroll-btn scroll-btn-next" 
                            onClick={() => scroll('next')}
                            aria-label="View Next Products"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
