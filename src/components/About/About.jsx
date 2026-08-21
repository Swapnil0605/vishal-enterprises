import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

export const About = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="section-container">
                <div className="about-two-col-layout">
                    {/* ─── Left Side: Sticky Image-Clipped "35" Display ─── */}
                    <div className="about-sticky-col gs-animate" data-animate="fade-right">
                        <div className="about-sticky-wrapper">
                            {/* Giant Image-Filled Number "35" (Properly Centered) */}
                            <div className="about-number-visual" title="35 Years of Engineering Excellence">
                                <span className="image-clipped-number">35</span>
                            </div>

                            {/* Centered Caption */}
                            <div className="about-number-caption">
                                <span className="caption-main">35 Years of Engineering Excellence</span>
                                <span className="caption-sub">with Dedicated Technical Expertise</span>
                            </div>
                        </div>
                    </div>

                    {/* ─── Right Side: Concise About Content ─── */}
                    <div className="about-content-col gs-animate" data-animate="fade-left">
                        {/* Eyebrow Label */}
                        <div className="section-label">
                            <span className="label-line"></span>
                            <span>About Our Enterprise</span>
                        </div>

                        {/* Main Large Heading */}
                        <h2 className="about-main-title">
                            Experience in Engineering.<br />
                            <span className="title-accent">Innovation for Tomorrow.</span>
                        </h2>

                        {/* Highlighted Statement with Vertical Accent Line */}
                        <div className="about-quote-box">
                            <p>
                                <strong>Vishal Enterprises</strong> is an experienced OEM and engineering solutions provider, delivering reliable industrial control panels, automation systems, and electrical infrastructure.
                            </p>
                        </div>

                        {/* Supporting Short Descriptions */}
                        <div className="about-body-text">
                            <p>
                                With over <strong>35 years of experience</strong>, we specialize in customised automation panels, PLC and process controls, fire and safety systems, and flameproof solutions for demanding industrial environments.
                            </p>
                            <p>
                                Operating from <strong>Dhule and Pune</strong>, we combine practical engineering expertise, quality, and innovation to deliver safe, efficient, and dependable solutions for industrial and public-sector clients.
                            </p>
                        </div>

                        {/* Action CTA Button */}
                        <div className="about-action-wrap">
                            <a href="#contact" className="about-cta-button">
                                <span>Get in Touch</span>
                                <ArrowRight size={18} className="cta-arrow-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
