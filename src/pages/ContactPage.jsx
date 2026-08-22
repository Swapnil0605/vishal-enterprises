import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { allServicesList } from '../data/services';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Send, 
    Check, 
    Loader2, 
    ShieldCheck, 
    Clock, 
    Home as HomeIcon, 
    ChevronRight, 
    Building2,
    Award,
    Sparkles
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactPage.css';

export const ContactPage = () => {
    const sectionRef = useScrollAnimation();
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setFormState({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    service: '',
                    location: '',
                    message: ''
                });
                setStatus('idle');
            }, 4000);
        }, 1200);
    };

    return (
        <div className="contact-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner ─── */}
            <div className="contact-page-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">Contact Us</span>
                    </div>

                    <h1 className="contact-page-title">
                        Connect with Our <span className="title-accent">Engineering Team</span>
                    </h1>
                    <p className="contact-page-subtitle">
                        Whether you require a customized automation panel, high-tension testing, or a formal technical quotation, our senior engineering directors are ready to assist you.
                    </p>
                </div>
            </div>

            {/* ─── Main Two-Column Contact & Form Section ─── */}
            <section className="contact-main-section" ref={sectionRef}>
                <div className="section-container">
                    <div className="contact-grid-layout">
                        {/* ─── Left Column: Company Directory & Credentials ─── */}
                        <div className="contact-info-col gs-animate" data-animate="fade-right">
                            <div className="contact-section-intro">
                                <span className="contact-pill-tag">DIRECT INQUIRIES</span>
                                <h2 className="contact-info-heading">Direct Engineering Access</h2>
                                <p className="contact-info-desc">
                                    Reach our key decision-makers and technical leads directly for immediate commercial and engineering inquiries.
                                </p>
                            </div>

                            {/* Contact Officers List */}
                            <div className="contact-officers-list">
                                <div className="officer-card">
                                    <div className="officer-icon-box">
                                        <Phone size={20} />
                                    </div>
                                    <div className="officer-details">
                                        <span className="officer-role">Director of Research & Development</span>
                                        <strong className="officer-name">Mr. Vasant Mahajan</strong>
                                        <a href="tel:+918275580423" className="officer-contact-link">
                                            +91 8275 580 423
                                        </a>
                                    </div>
                                </div>

                                <div className="officer-card">
                                    <div className="officer-icon-box">
                                        <Phone size={20} />
                                    </div>
                                    <div className="officer-details">
                                        <span className="officer-role">Sales & Business Development</span>
                                        <strong className="officer-name">Mr. Vishal Mahajan</strong>
                                        <a href="tel:+917350833874" className="officer-contact-link">
                                            +91 7350 833 874
                                        </a>
                                    </div>
                                </div>

                                <div className="officer-card">
                                    <div className="officer-icon-box">
                                        <Mail size={20} />
                                    </div>
                                    <div className="officer-details">
                                        <span className="officer-role">Official Corporate Inquiries</span>
                                        <strong className="officer-name">Central Correspondence</strong>
                                        <a href="mailto:vishalent@yahoo.co.in" className="officer-contact-link">
                                            vishalent@yahoo.co.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Operating Facilities */}
                            <div className="locations-block">
                                <h3 className="locations-title">Operating Facilities</h3>
                                <div className="locations-grid">
                                    <div className="location-item">
                                        <MapPin size={18} className="loc-icon" />
                                        <div>
                                            <strong>Manufacturing Works</strong>
                                            <p>Dhule, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <div className="location-item">
                                        <MapPin size={18} className="loc-icon" />
                                        <div>
                                            <strong>Regional Office</strong>
                                            <p>Pune, Maharashtra, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Statutory Credentials */}
                            <div className="credentials-banner">
                                <div className="cred-badge">
                                    <ShieldCheck size={18} className="cred-ic" />
                                    <span>ISO 9001:2015 Certified OEM</span>
                                </div>
                                <div className="cred-badge">
                                    <Award size={18} className="cred-ic" />
                                    <span>GeM-Accredited Manufacturer</span>
                                </div>
                                <div className="cred-badge">
                                    <Building2 size={18} className="cred-ic" />
                                    <span>Licensed Class-1 Contractor</span>
                                </div>
                            </div>
                        </div>

                        {/* ─── Right Column: Technical Proposal Form ─── */}
                        <div className="contact-form-col gs-animate" data-animate="fade-left">
                            <div className="contact-form-card">
                                <div className="form-card-header">
                                    <h2 className="form-title">Request a Technical Proposal</h2>
                                    <p className="form-subtitle">
                                        Fill in your project requirements below to receive a formal commercial and engineering proposal within 24 working hours.
                                    </p>
                                </div>

                                <form className="technical-proposal-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="p-name">Full Name *</label>
                                            <input 
                                                id="p-name"
                                                type="text" 
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="e.g. Rajesh Kumar" 
                                                required 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="p-company">Company / Organization *</label>
                                            <input 
                                                id="p-company"
                                                type="text" 
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                placeholder="e.g. Indian Oil Corporation" 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="p-email">Work Email Address *</label>
                                            <input 
                                                id="p-email"
                                                type="email" 
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="name@company.com" 
                                                required 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="p-phone">Phone Number *</label>
                                            <input 
                                                id="p-phone"
                                                type="tel" 
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210" 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="p-service">Required Engineering Solution *</label>
                                            <select 
                                                id="p-service"
                                                name="service" 
                                                value={formState.service} 
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Select a Service</option>
                                                {allServicesList.map((serviceName, index) => (
                                                    <option key={index} value={serviceName}>
                                                        {serviceName}
                                                    </option>
                                                ))}
                                                <option value="Other Custom Industrial Solution">Other Custom Industrial Solution</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="p-location">Project Site / City</label>
                                            <input 
                                                id="p-location"
                                                type="text" 
                                                name="location"
                                                value={formState.location}
                                                onChange={handleChange}
                                                placeholder="e.g. Mumbai, Pune, Delhi..." 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="p-message">Project Specifications / Requirements</label>
                                        <textarea 
                                            id="p-message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows="4" 
                                            placeholder="Provide details on voltage ratings, single line diagrams (SLD), panel dimensions, PLC model preference, or tender reference..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className={`proposal-submit-btn ${status === 'success' ? 'proposal-submit-btn--success' : ''}`}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' && (
                                            <>
                                                <Loader2 size={18} className="spin-icon" />
                                                <span>Transmitting Proposal Request...</span>
                                            </>
                                        )}
                                        {status === 'success' && (
                                            <>
                                                <Check size={18} />
                                                <span>Proposal Request Submitted Successfully!</span>
                                            </>
                                        )}
                                        {status === 'idle' && (
                                            <>
                                                <span>Submit Technical Proposal Request</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};
