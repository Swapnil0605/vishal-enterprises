import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Phone, 
    ArrowUpRight, 
    FileText, 
    Download, 
    ShieldCheck, 
    Clock, 
    Sparkles,
    ArrowRight,
    Headphones,
    FileCheck
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

export const Contact = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section className="cta-banner-section" id="contact" ref={sectionRef}>
            <div className="section-container">
                <div className="cta-wide-card gs-animate" data-animate="fade-up">
                    {/* Background Industrial Image Overlay */}
                    <div className="cta-card-bg">
                        <img 
                            src="/images/cta-bg.jpg" 
                            alt="Industrial Electrical Control Panel Manufacturing Facility" 
                            className="cta-bg-image"
                        />
                        <div className="cta-bg-gradient-overlay"></div>
                    </div>

                    {/* Content Layout */}
                    <div className="cta-card-content">
                        <div className="cta-text-wrap">
                            <h2 className="cta-headline">
                                Require a Custom Engineered Control Solution?
                            </h2>
                            <p className="cta-subheadline">
                                Our senior electrical and R&D engineers are available to review your project specifications and provide comprehensive proposals.
                            </p>
                        </div>

                        <div className="cta-action-wrap">
                            <Link 
                                to="/contact"
                                className="cta-proposal-button"
                            >
                                <span>Request a Technical Proposal</span>
                                <ArrowRight size={18} className="cta-btn-arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
