import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ArrowUpRight, 
    Home as HomeIcon, 
    ChevronRight
} from 'lucide-react';
import './ServicesPage.css';

const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'Turnkey & AMC', label: 'Turnkey & AMC' },
    { id: 'Testing & Audits', label: 'Testing & Audits' },
    { id: 'Maintenance & Servicing', label: 'Maintenance & Servicing' },
    { id: 'Safety & Compliance', label: 'Safety & Compliance' },
    { id: 'Substation & HT', label: 'Substation & HT' }
];

export const ServicesPage = () => {
    return (
        <div className="services-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner (Matching 70vh Architecture) ─── */}
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
                        Explore our complete engineering services spanning turnkey AMCs, thermography analysis, relay testing, breaker overhauling, and high-tension substation tests.
                    </p>
                </div>
            </div>

            {/* ─── YouTube-Style Compact Grid Section ─── */}
            <section className="services-yt-section">
                <div className="section-container">

                    {/* 4-Column YouTube-Style Video/Service Grid */}
                    <div className="yt-services-grid">
                        {servicesData.map((service) => (
                            <div key={service.id} className="yt-service-card" id={service.slug}>
                                
                                {/* Enlarged Thumbnail Wrap */}
                                <Link to={`/services/${service.slug}`} className="yt-thumbnail-wrap">
                                    <img 
                                        src={service.image} 
                                        alt={service.alt || service.title} 
                                        className="yt-thumbnail-img" 
                                        loading="lazy"
                                    />
                                </Link>

                                {/* Metadata Content */}
                                <div className="yt-card-details">
                                    <div className="yt-meta-content">
                                        <Link to={`/services/${service.slug}`} className="yt-card-title-link">
                                            <h3 className="yt-card-title">{service.title}</h3>
                                        </Link>

                                        <div className="yt-card-meta-line">
                                            <span className="yt-meta-category">{service.category}</span>
                                        </div>

                                        {/* Action Explore Link */}
                                        <div className="yt-card-action">
                                            <Link to={`/services/${service.slug}`} className="yt-explore-action-btn">
                                                <span>Explore</span>
                                                <ArrowUpRight size={14} className="yt-arrow-icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Bottom CTA Banner ─── */}
            <div className="services-page-cta-banner">
                <div className="section-container">
                    <div className="services-cta-card">
                        <div className="services-cta-text">
                            <h3>Require a Custom Engineered Control Solution?</h3>
                            <p>Our senior electrical and R&D engineers are available to review your project specifications and provide comprehensive proposals within 24 hours.</p>
                        </div>
                        <Link to="/contact" className="services-cta-btn">
                            <span>Request a Quote</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};
