import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData, getServiceBySlug } from '../data/services';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ChevronRight, 
    Home as HomeIcon, 
    Check, 
    ShieldCheck, 
    Phone, 
    Mail, 
    ArrowRight, 
    Award,
    Factory,
    ArrowUpRight
} from 'lucide-react';
import './ServiceDetailPage.css';

export const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    // If slug doesn't exist, redirect to /services
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="service-detail-page-wrapper">
            <Navbar />

            {/* ─── Breadcrumb Banner ─── */}
            <div className="service-detail-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <Link to="/services" className="breadcrumb-link">
                            <span>Services</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">{service.title}</span>
                    </div>

                    <div className="service-header-row">
                        <div>
                            <span className="service-detail-badge">{service.num} | {service.category}</span>
                            <h1 className="service-detail-title">{service.fullTitle}</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Main Two-Column Layout (Sidebar + Detailed Content) ─── */}
            <section className="service-detail-body-section">
                <div className="section-container">
                    <div className="service-detail-layout">
                        {/* ─── Left Sidebar: Services Menu & Consultation Box ─── */}
                        <aside className="service-detail-sidebar">
                            {/* 1. All Services Quick Navigation Directory */}
                            <div className="sidebar-widget services-menu-widget">
                                <h3 className="sidebar-widget-title">Our Services Directory</h3>
                                <ul className="sidebar-services-list">
                                    {servicesData.map((item) => {
                                        const isActive = item.slug === service.slug;
                                        return (
                                            <li key={item.id}>
                                                <Link 
                                                    to={`/services/${item.slug}`}
                                                    className={`sidebar-service-link ${isActive ? 'active' : ''}`}
                                                >
                                                    <span className="sidebar-link-text">{item.title}</span>
                                                    <ChevronRight size={15} className="sidebar-arrow" />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* 2. Direct Engineering Consultation Card */}
                            <div className="sidebar-widget consultation-widget">
                                <div className="consultation-icon-box">
                                    <Phone size={24} />
                                </div>
                                <h4>Need Custom Technical Specifications?</h4>
                                <p>Speak directly with our Chief R&D and Engineering Directors.</p>
                                
                                <div className="consultation-contact-info">
                                    <div className="consult-row">
                                        <Phone size={16} className="contact-ic" />
                                        <a href="tel:+918275580423">+91 8275 580 423</a>
                                    </div>
                                    <div className="consult-row">
                                        <Mail size={16} className="contact-ic" />
                                        <a href="mailto:vishalent@yahoo.co.in">vishalent@yahoo.co.in</a>
                                    </div>
                                </div>

                                <Link to="/contact" className="sidebar-quote-btn">
                                    <span>Request a Quote</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </aside>

                        {/* ─── Right Main Content: Comprehensive Details ─── */}
                        <main className="service-detail-content">
                            {/* Featured High-Res Visual */}
                            <div className="service-featured-image-box">
                                <img 
                                    src={service.image} 
                                    alt={service.alt} 
                                    className="service-detail-main-img"
                                />
                                <div className="service-img-overlay-tag">
                                    <Award size={16} />
                                    <span>Engineered by Vishal Enterprises</span>
                                </div>
                            </div>

                            {/* In-depth Engineering Overview */}
                            <div className="service-section-block">
                                <h2 className="detail-section-heading">Engineering & Technical Overview</h2>
                                <p className="detail-paragraph-lead">{service.detailedDesc}</p>
                                <p className="detail-paragraph">{service.shortDesc}</p>
                            </div>

                            {/* Key Features & Capabilities Grid */}
                            <div className="service-section-block">
                                <h2 className="detail-section-heading">Key Technical Features & Capabilities</h2>
                                <div className="detail-features-grid">
                                    {service.features.map((feat, index) => (
                                        <div key={index} className="detail-feature-card">
                                            <div className="feature-check-icon">
                                                <Check size={16} />
                                            </div>
                                            <span className="feature-text">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Industrial Application Sectors */}
                            <div className="service-section-block">
                                <h2 className="detail-section-heading">Industrial Applications & Deployments</h2>
                                <p className="section-subtext">Engineered for heavy-duty mission-critical deployments across diverse sectors:</p>
                                <div className="detail-applications-grid">
                                    {service.applications.map((app, index) => (
                                        <div key={index} className="app-tag-pill">
                                            <Factory size={16} className="app-ic" />
                                            <span>{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Compliance & Standards */}
                            <div className="service-section-block">
                                <h2 className="detail-section-heading">Manufacturing & Safety Standards</h2>
                                <div className="standards-badge-list">
                                    {service.standards.map((std, index) => (
                                        <div key={index} className="standard-badge-item">
                                            <ShieldCheck size={18} className="std-ic" />
                                            <span>{std}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Page Bottom Quote Box */}
                            <div className="service-quote-action-card">
                                <div className="quote-action-left">
                                    <h3>Ready to deploy {service.title}?</h3>
                                    <p>Submit your project technical specifications or bill of materials for custom pricing and fast turnaround.</p>
                                </div>
                                <Link to="/contact" className="quote-action-btn">
                                    <span>Get a Technical Proposal</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};
