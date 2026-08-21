import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { ArrowRight, Check, ShieldCheck, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ServicesPage.css';

export const ServicesPage = () => {
    const sectionRef = useScrollAnimation();

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

            {/* ─── Alternating Zig-Zag 16-Services Directory ─── */}
            <section className="services-zigzag-section" ref={sectionRef}>
                <div className="section-container">
                    <div className="services-zigzag-list">
                        {servicesData.map((service, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <div 
                                    key={service.id} 
                                    id={service.slug}
                                    className={`service-zigzag-row ${isEven ? 'service-zigzag-row--reverse' : ''} gs-animate`}
                                    data-animate="fade-up"
                                    data-delay={(index % 3) * 80}
                                >
                                    {/* Service Visual */}
                                    <div className="service-zigzag-visual">
                                        <div className="zigzag-img-frame">
                                            <img 
                                                src={service.image} 
                                                alt={service.alt} 
                                                className="zigzag-img"
                                                loading="lazy"
                                            />
                                            <div className="zigzag-img-badge">
                                                <ShieldCheck size={14} className="badge-icon" />
                                                <span>{service.standards[0] || 'ISO 9001:2015'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Information */}
                                    <div className="service-zigzag-content">
                                        <div className="zigzag-meta-row">
                                            <span className="zigzag-num">{service.num}</span>
                                            <span className="zigzag-category-tag">{service.category}</span>
                                        </div>

                                        <h2 className="zigzag-title">{service.fullTitle}</h2>
                                        
                                        <p className="zigzag-desc">{service.shortDesc}</p>

                                        {/* Highlight Features */}
                                        <ul className="zigzag-features-list">
                                            {service.features.slice(0, 3).map((feat, i) => (
                                                <li key={i}>
                                                    <div className="check-dot">
                                                        <Check size={12} />
                                                    </div>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Action Button Link to Dedicated Service Page */}
                                        <div className="zigzag-btn-wrap">
                                            <Link 
                                                to={`/services/${service.slug}`} 
                                                className="zigzag-explore-btn"
                                            >
                                                <span>Explore Service</span>
                                                <ArrowRight size={16} className="btn-arrow" />
                                            </Link>
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
                        <a href="/#contact" className="services-cta-btn">
                            <span>Request a Technical Proposal</span>
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};
