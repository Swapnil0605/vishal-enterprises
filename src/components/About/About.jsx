import React from 'react';
import { Link } from 'react-router-dom';
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
                            {/* Giant Image-Filled Number "35" */}
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
                            <span className="heading-line-1">Experience in Engineering.</span>
                            <span className="title-accent heading-line-2">Innovation for Tomorrow.</span>
                        </h2>

                        {/* Highlighted Statement with Vertical Accent Line */}
                        <div className="about-quote-box">
                            <p>
                                <strong>Vishal Enterprises</strong> is an experienced OEM and engineering solutions provider, delivering reliable industrial control panels, automation systems and electrical infrastructure.
                            </p>
                        </div>

                        {/* Supporting Short Description */}
                        <div className="about-body-text">
                            <p>
                                With over <strong>35 years of experience</strong>, we specialize in customised automation panels, PLC and process controls, fire safety systems and flameproof solutions for demanding industrial environments.
                            </p>
                        </div>

                        {/* Action CTA Button: Routes to /about */}
                        <div className="about-action-wrap">
                            <Link to="/about" className="about-cta-button">
                                <span>Know More</span>
                                <ArrowRight size={18} className="cta-arrow-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
