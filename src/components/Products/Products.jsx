import React, { useRef, useState, useEffect } from 'react';
import { productsData } from '../../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Products.css';

export const Products = () => {
    const sectionRef = useScrollAnimation();
    const trackRef = useRef(null);
    const [progress, setProgress] = useState(12);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const updateProgress = () => {
        if (!trackRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll > 0) {
            const currentProgress = (scrollLeft / maxScroll) * 100;
            setProgress(Math.min(100, Math.max(12, currentProgress)));
        } else {
            setProgress(100);
        }
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

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - trackRef.current.offsetLeft);
        setScrollLeftState(trackRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !trackRef.current) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        trackRef.current.scrollLeft = scrollLeftState - walk;
    };

    useEffect(() => {
        updateProgress();
        window.addEventListener('resize', updateProgress);
        return () => window.removeEventListener('resize', updateProgress);
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

                {/* Slider and Controls contained within the symmetric section container */}
                <div className="products-slider-wrapper">
                    <div 
                        className={`products-track ${isDragging ? 'dragging' : ''}`}
                        ref={trackRef}
                        onScroll={updateProgress}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {productsData.map((prod) => (
                            <div key={prod.id} className="product-card">
                                <div className="product-img">
                                    <img src={prod.image} alt={prod.title} draggable={false} />
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
                                style={{ width: `${progress}%` }}
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
