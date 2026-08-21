import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroBackgroundImages = [
    {
        id: 'workbench',
        image: '/images/hero/hero-workbench.jpg',
        alt: 'Electronics Hardware Engineering & Blueprint Design Workbench'
    },
    {
        id: 'mv-switchgear',
        image: '/images/hero/mv-switchgear-facility.jpg',
        alt: 'Industrial MV Switchgear & MCC Distribution Facility'
    },
    {
        id: 'scada-control',
        image: '/images/hero/scada-control-room.jpg',
        alt: 'Central SCADA & Industrial Process Automation Control Room'
    },
    {
        id: 'automation-panel',
        image: '/images/hero/automation-panel.jpg',
        alt: 'Custom PLC Automation Control Panel Manufacturing'
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
                <div className="hero-fullscreen-overlay"></div>
            </div>

            {/* ─── Hero Content Overlay (Tagline Only) ─── */}
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
