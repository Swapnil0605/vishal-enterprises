import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ArrowUpRight, 
    ShieldCheck, 
    Home as HomeIcon, 
    ChevronRight,
    Cpu,
    Zap,
    Flame,
    Activity,
    Layers
} from 'lucide-react';
import './ServicesPage.css';

const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'Automation & Controls', label: 'Automation & Controls' },
    { id: 'Power & Distribution', label: 'Power & Distribution' },
    { id: 'Flameproof & Safety', label: 'Flameproof & Safety' },
    { id: 'Testing & Maintenance', label: 'Testing & Maintenance' }
];

const getCategoryIcon = (category) => {
    switch(category) {
        case 'Automation & Controls':
            return <Cpu size={18} />;
        case 'Power & Distribution':
            return <Zap size={18} />;
        case 'Flameproof & Safety':
            return <Flame size={18} />;
        case 'Testing & Maintenance':
            return <Activity size={18} />;
        default:
            return <Layers size={18} />;
    }
};

export const ServicesPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredServices = activeFilter === 'all' 
        ? servicesData 
        : servicesData.filter(item => item.category === activeFilter);

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
                        Explore our complete 16-service portfolio spanning custom automation panels, flameproof systems and turnkey high-tension testing.
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

                                    {/* YouTube Duration-Style Compliance Badge (Bottom Right) */}
                                    <div className="yt-duration-badge">
                                        <ShieldCheck size={12} />
                                        <span>{service.standards[0] || 'ISO 9001:2015'}</span>
                                    </div>
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
