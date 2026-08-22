import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroBackgroundImages = [
    {
        id: 'hero-1',
        image: '/images/hero/hero1.png',
        alt: 'Industrial Electrical Control Engineering and Blueprint Design'
    },
    {
        id: 'hero-2',
        image: '/images/hero/hero2.png',
        alt: 'Custom Automation Panel Manufacturing and Power Distribution'
    },
    {
        id: 'hero-3',
        image: '/images/hero/hero3.png',
        alt: 'SCADA Process Automation and Industrial Control Systems'
    },
    {
        id: 'hero-4',
        image: '/images/hero/hero4.png',
        alt: 'High Voltage Switchgear and Electrical Engineering Facility'
    }
];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Preload images into browser memory immediately on mount
    useEffect(() => {
        heroBackgroundImages.forEach((item) => {
            const img = new Image();
            img.src = item.image;
        });
    }, []);

    // Automatic smooth background crossfade transition every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgroundImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-fullscreen-section" id="hero">
            {/* ─── Smooth Transitioning Full-Bleed Background Images ─── */}
            <div className="hero-fullscreen-bg">
                {heroBackgroundImages.map((item, index) => (
                    <div 
                        key={item.id}
                        className={`hero-bg-layer ${currentImageIndex === index ? 'active' : ''}`}
                    >
                        <img 
                            src={item.image} 
                            alt={item.alt} 
                            className="hero-fullscreen-img"
                            loading="eager"
                        />
                    </div>
                ))}
                {/* Reduced Gradient Overlay: Keeps text readable on left, images vivid on center/right */}
                <div className="hero-fullscreen-overlay"></div>
            </div>

            {/* ─── Hero Content Overlay (Aligned with Navbar Logo) ─── */}
            <div className="hero-fullscreen-content">
                <div className="section-container">
                    <div className="hero-text-block">
                        <div className="hero-top-tag">
                            <span className="tag-dot"></span>
                            <span>ISO 9001:2015 Certified OEM | GeM Accredited</span>
                        </div>

                        <h1 className="hero-main-title">
                            Engineering<br />
                            <span className="text-accent-red">Reliability.</span><br />
                            Powering<br />
                            <span className="text-accent-red">Progress.</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
