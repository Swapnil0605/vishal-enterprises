import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './WhyUs.css';

const advantageCards = [
    {
        id: 1,
        title: "Over 35 Years of Proven Excellence",
        desc: "Decades of specialized engineering experience delivering dependable electrical and electronic control solutions across critical infrastructure throughout India."
    },
    {
        id: 2,
        title: "Certified Quality and OEM Compliance",
        desc: "ISO 9001:2015 certified manufacturing, GeM-accredited OEM status and Class-1 government licensing ensure adherence to the highest industrial standards."
    },
    {
        id: 3,
        title: "Trusted by Leading Public Sector Enterprises",
        desc: "A proven record of supplying high-reliability systems to industry leaders, including Indian Oil, Bharat Petroleum, HPCL and Honeywell Automation."
    },
    {
        id: 4,
        title: "Custom Design and In-House R&D",
        desc: "Comprehensive in-house design capabilities spanning microprocessor programming, SCADA integration, custom sheet-metal fabrication and Modbus architecture."
    },
    {
        id: 5,
        title: "Turnkey Execution and Lifecycle Services",
        desc: "Complete single-source responsibility covering concept engineering, panel assembly, testing, commissioning and preventive annual maintenance contracts."
    },
    {
        id: 6,
        title: "Certified Hazardous Area Engineering",
        desc: "Specialized expertise in designing flameproof and explosion-proof control panels rated for Zone 1 and Zone 2 hazardous petroleum environments."
    }
];

export const WhyUs = () => {
    const sectionRef = useScrollAnimation();
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!trackRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        const totalItems = advantageCards.length;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll > 0) {
            const index = Math.round((scrollLeft / maxScroll) * (totalItems - 1));
            setActiveIndex(index);
        }
    };

    const scrollToSlide = (index) => {
        if (!trackRef.current) return;
        const card = trackRef.current.querySelector('.testimonial-advantage-card');
        const gap = 24;
        const cardWidth = card ? card.offsetWidth + gap : 360;
        trackRef.current.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    };

    return (
        <section className="why-us-testimonial-section" id="why-us" ref={sectionRef}>
            <div className="section-container relative-z">
                {/* ─── Centered Main Heading matching reference ─── */}
                <div className="why-testimonial-header gs-animate" data-animate="fade-up">
                    <h2 className="why-testimonial-title">THE VISHAL ADVANTAGE</h2>
                </div>

                {/* ─── Cards Slider Wrapper ─── */}
                <div className="why-testimonial-wrapper">
                    <div 
                        className="why-testimonial-track" 
                        ref={trackRef}
                        onScroll={handleScroll}
                    >
                        {advantageCards.map((item) => (
                            <div key={item.id} className="testimonial-advantage-card">
                                {/* 5-Star Rating Row */}
                                <div className="rating-stars-row">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star-icon">★</span>
                                    ))}
                                </div>

                                {/* Advantage Title */}
                                <div className="card-author-info">
                                    <h3 className="author-name">{item.title}</h3>
                                </div>

                                {/* Original Advantage Description */}
                                <p className="advantage-quote">
                                    "{item.desc}"
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="why-pagination-dots">
                        {advantageCards.map((_, i) => (
                            <button
                                key={i}
                                className={`pagination-dot ${activeIndex === i ? 'active' : ''}`}
                                onClick={() => scrollToSlide(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
