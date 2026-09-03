import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { Plus, Minus, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Services.css';

export const Services = () => {
    const sectionRef = useScrollAnimation();
    const [activeIndex, setActiveIndex] = useState(1); // Default active item is index 1 (PLC Panels & Process Controls)

    // Show only the first 5 featured services on homepage as requested
    const featuredServices = servicesData.slice(0, 5);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const activeService = activeIndex >= 0 && activeIndex < featuredServices.length
        ? featuredServices[activeIndex]
        : featuredServices[0];

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="section-container">
                {/* Section Header */}
                <div className="services-header gs-animate" data-animate="fade-up">
                    <h2 className="services-title">
                        Our Comprehensive <span className="title-accent">Services & Scope</span>
                    </h2>
                    <p className="services-subtitle">
                        Full spectrum of electrical contracting, automation panel manufacturing, flameproof systems and high-tension engineering services.
                    </p>
                </div>

                {/* Interactive Split Showcase */}
                <div className="services-interactive-layout">
                    {/* Left Column: Top 5 Featured Services Accordion */}
                    <div className="services-accordion-col gs-animate" data-animate="fade-right">
                        <div className="services-accordion-list">
                            {featuredServices.map((service, index) => {
                                const isOpen = activeIndex === index;
                                return (
                                    <div
                                        key={service.id}
                                        className={`service-accordion-item ${isOpen ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="service-accordion-header">
                                            <div className="service-accordion-left">
                                                <span className="service-num-badge">{service.num}</span>
                                                <h3 className="service-item-title">{service.title}</h3>
                                            </div>
                                            <button
                                                className="service-expand-btn"
                                                aria-label={isOpen ? "Collapse service details" : "Expand service details"}
                                            >
                                                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                            </button>
                                        </div>

                                        {isOpen && (
                                            <div className="service-accordion-body">
                                                <p className="service-accordion-desc">{service.shortDesc}</p>
                                                <div className="service-item-footer">
                                                    <div className="service-category-tag">
                                                        <CheckCircle2 size={13} className="tag-icon" />
                                                        <span>{service.category}</span>
                                                    </div>
                                                    <Link
                                                        to={`/services/${service.slug}`}
                                                        className="service-quick-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <span>Details</span>
                                                        <ChevronRight size={14} />
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Direct CTA Link to All Services Page */}
                        <div className="services-action-wrap">
                            <Link to="/services" className="services-explore-all-btn">
                                <span>Explore All Services</span>
                                <ArrowRight size={18} className="explore-arrow" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Sticky Dynamic Visual Stage */}
                    <div className="services-visual-col gs-animate" data-animate="fade-left">
                        <div className="services-showcase-window">
                            <div className="showcase-img-container">
                                <img
                                    key={activeService.id}
                                    src={activeService.image}
                                    alt={activeService.alt}
                                    className="showcase-main-img"
                                />
                            </div>
                            <div className="showcase-info-bar">
                                <div className="showcase-badge">{activeService.num} &nbsp;|&nbsp; {activeService.category}</div>
                                <div className="showcase-title">{activeService.title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
