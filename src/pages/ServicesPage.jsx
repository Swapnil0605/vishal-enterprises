import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { ArrowRight, Check, ShieldCheck, Home as HomeIcon, ChevronRight } from 'lucide-react';
import './ServicesPage.css';

const cardThemeList = [
    { 
        bg: '#0b4ea2', // Corporate Blue (VE Logo)
        text: '#ffffff', 
        tagBg: 'rgba(255, 255, 255, 0.22)', 
        tagColor: '#ffffff', 
        btnBg: '#ffffff', 
        btnColor: '#0b4ea2' 
    },
    { 
        bg: '#0f172a', // Slate Dark
        text: '#ffffff', 
        tagBg: 'rgba(227, 27, 35, 0.22)', 
        tagColor: '#fca5a5', 
        btnBg: '#e31b23', 
        btnColor: '#ffffff' 
    },
    { 
        bg: '#1e3a8a', // Deep Royal Blue
        text: '#ffffff', 
        tagBg: 'rgba(255, 255, 255, 0.22)', 
        tagColor: '#93c5fd', 
        btnBg: '#ffffff', 
        btnColor: '#1e3a8a' 
    },
    { 
        bg: '#b91218', // Brand Deep Red
        text: '#ffffff', 
        tagBg: 'rgba(255, 255, 255, 0.22)', 
        tagColor: '#ffffff', 
        btnBg: '#ffffff', 
        btnColor: '#b91218' 
    },
    { 
        bg: '#1e293b', // Titanium Slate
        text: '#ffffff', 
        tagBg: 'rgba(255, 255, 255, 0.18)', 
        tagColor: '#cbd5e1', 
        btnBg: '#e31b23', 
        btnColor: '#ffffff' 
    },
    { 
        bg: '#065f46', // Industrial Safety Emerald
        text: '#ffffff', 
        tagBg: 'rgba(255, 255, 255, 0.22)', 
        tagColor: '#a7f3d0', 
        btnBg: '#ffffff', 
        btnColor: '#065f46' 
    }
];

export const ServicesPage = () => {
    return (
        <div className="services-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner ─── */}
            <div className="services-page-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">Services & Scope</span>
                    </div>

                    <h1 className="services-page-title">
                        Comprehensive Engineering <span className="title-accent">Services & Scope</span>
                    </h1>
                    <p className="services-page-subtitle">
                        From custom automation panel manufacturing and flameproof instrumentation to turnkey high-tension testing and commissioning, explore our complete 16-service industrial portfolio.
                    </p>
                </div>
            </div>

            {/* ─── Sticky Stacking Cards Showcase Section ─── */}
            <section className="services-stack-section">
                <div className="section-container">
                    <div className="services-stack-container">
                        {servicesData.map((service, index) => {
                            const theme = cardThemeList[index % cardThemeList.length];

                            return (
                                <div 
                                    key={service.id} 
                                    id={service.slug}
                                    className="service-stack-card"
                                    style={{
                                        top: `80px`,
                                        backgroundColor: theme.bg,
                                        color: theme.text,
                                        zIndex: index + 1
                                    }}
                                >
                                    {/* Left Content Side (.stack-left) */}
                                    <div className="stack-left">
                                        <div className="stack-top-group">
                                            <div className="stack-meta-row">
                                                <span 
                                                    className="stack-tag"
                                                    style={{
                                                        backgroundColor: theme.tagBg,
                                                        color: theme.tagColor
                                                    }}
                                                >
                                                    {service.category}
                                                </span>
                                                <span className="stack-number">{service.num}</span>
                                            </div>

                                            <h2 className="stack-title">{service.fullTitle}</h2>
                                            
                                            <p className="stack-description">{service.shortDesc}</p>

                                            {/* Features List */}
                                            <ul className="stack-features-list">
                                                {service.features.slice(0, 3).map((feat, i) => (
                                                    <li key={i}>
                                                        <div className="stack-check-box">
                                                            <Check size={12} />
                                                        </div>
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Button pinned at bottom */}
                                        <div className="stack-action-row">
                                            <Link 
                                                to={`/services/${service.slug}`} 
                                                className="stack-cta-btn"
                                                style={{
                                                    backgroundColor: theme.btnBg,
                                                    color: theme.btnColor
                                                }}
                                            >
                                                <span>Explore Specifications</span>
                                                <ArrowRight size={15} className="stack-btn-arrow" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Visual Side (.stack-right) */}
                                    <div className="stack-right">
                                        <div className="stack-img-wrap">
                                            <img 
                                                src={service.image} 
                                                alt={service.alt} 
                                                className="stack-img"
                                                loading="lazy"
                                            />
                                            <div className="stack-standard-badge">
                                                <ShieldCheck size={14} className="badge-icon" />
                                                <span>{service.standards[0] || 'ISO 9001:2015'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── Bottom CTA Banner ─── */}
            <div className="services-page-cta-banner">
                <div className="section-container">
                    <div className="services-cta-card">
                        <div className="services-cta-text">
                            <h3>Require a Custom Engineered Control Solution?</h3>
                            <p>Our senior electrical and R&D engineers are available to review your project specifications and provide comprehensive proposals.</p>
                        </div>
                        <Link to="/contact" className="services-cta-btn">
                            <span>Request a Technical Proposal</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};
