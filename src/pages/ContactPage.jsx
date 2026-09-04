import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Send, 
    Check, 
    Loader2, 
    ShieldCheck, 
    Home as HomeIcon, 
    ChevronRight, 
    Building2,
    Award,
    ExternalLink,
    Navigation,
    AlertCircle
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactPage.css';

export const ContactPage = () => {
    const sectionRef = useScrollAnimation();
    const locationHook = useLocation();
    const [selectedLocation, setSelectedLocation] = useState('dhule'); // 'dhule' | 'pune'

    // Helper to resolve incoming service or product from router state
    const resolveIncomingState = () => {
        const state = locationHook.state || {};
        const rawSubject = (state.subject || '').trim();
        const rawProduct = (state.product || '').trim();
        const rawService = (state.service || '').trim();

        const resolvedProduct = rawProduct || '';
        const resolvedService = rawService || (!rawProduct && rawSubject ? rawSubject : '');

        return { resolvedProduct, resolvedService };
    };

    const { resolvedProduct, resolvedService } = resolveIncomingState();

    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: resolvedService,
        product: resolvedProduct,
        location: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (locationHook.state) {
            const { resolvedProduct: newProduct, resolvedService: newService } = resolveIncomingState();
            setFormState(prev => ({
                ...prev,
                product: newProduct || prev.product,
                service: newService || prev.service
            }));
        }
    }, [locationHook.state]);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/swapnilchikte0@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Website Enquiry: ${formState.name} ${formState.company ? `(${formState.company})` : ''} - ${formState.service || formState.product || 'General Quotation'}`,
                    _template: 'table',
                    _captcha: 'false',
                    _replyto: formState.email,
                    "Full Name": formState.name,
                    "Company / Organization": formState.company || 'Not specified',
                    "Work Email Address": formState.email,
                    "Phone Number": formState.phone,
                    "Required Service": formState.service || 'Not specified',
                    "Required Product": formState.product || 'Not specified',
                    "Project Site / City": formState.location || 'Not specified',
                    "Project Specifications / Requirements": formState.message || 'No additional details provided'
                })
            });

            const data = await response.json();

            if (!response.ok || data.success === 'false' || data.success === false) {
                throw new Error(data.message || 'Failed to submit inquiry. Please try again.');
            }

            setStatus('success');
            setTimeout(() => {
                setFormState({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    service: '',
                    product: '',
                    location: '',
                    message: ''
                });
                setStatus('idle');
            }, 5000);
        } catch (err) {
            console.error('[Contact Form Error]:', err);
            setStatus('error');
            setErrorMessage(err.message || 'Unable to submit your inquiry at this moment. Please try again or call us directly.');
        }
    };

    const locationDetails = {
        dhule: {
            title: "HEADQUARTERS & MANUFACTURING WORKS",
            name: "VISHAL ENTERPRISES",
            address: "18, Keruji Nagar, Chakkarbardi Road, Dhule, Maharashtra 424001, India",
            mapQuery: "https://maps.google.com/maps?q=20.8955,74.7675+(Vishal+Enterprises+-+Manufacturing+Works)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
            directionsLink: "https://www.google.com/maps/dir/?api=1&destination=20.8955,74.7675"
        },
        pune: {
            title: "REGIONAL OPERATIONS & PROJECT LIAISON",
            name: "VISHAL ENTERPRISES",
            address: "P7, Thakar Nagar, Maan, Hinjewadi Ph 1, Pune, Maharashtra 411057, India",
            mapQuery: "https://maps.google.com/maps?q=18.571676,73.719457+(Vishal+Enterprises+-+Pune+Office)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
            directionsLink: "https://www.google.com/maps/dir/?api=1&destination=18.571676,73.719457"
        }
    };

    const activeLoc = locationDetails[selectedLocation];

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
                                            <strong>Manufacturing Works (Dhule)</strong>
                                            <p>18, Keruji Nagar, Chakkarbardi Road, Dhule 424001</p>
                                        </div>
                                    </div>
                                    <div className="location-item">
                                        <MapPin size={18} className="loc-icon" />
                                        <div>
                                            <strong>Regional Office (Pune)</strong>
                                            <p>P7, Thakar Nagar, Maan, Hinjewadi Ph 1, Pune 411057</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ─── Right Column: Technical Proposal Form ─── */}
                        <div className="contact-form-col gs-animate" data-animate="fade-left">
                            <div className="contact-form-card">
                                <div className="form-card-header">
                                    <h2 className="form-title">Request a Quote</h2>
                                    <p className="form-subtitle">
                                        Fill in your project requirements below to receive a formal commercial and engineering proposal within 24 working hours.
                                    </p>
                                </div>

                                <form 
                                    id="contactForm"
                                    action="https://formsubmit.co/swapnilchikte0@gmail.com" 
                                    method="POST"
                                    className="technical-proposal-form" 
                                    onSubmit={handleSubmit}
                                >
                                    {/* FormSubmit Hidden Configuration Fields */}
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_subject" value="New Website Enquiry - Vishal Enterprises" />
                                    <input type="hidden" name="_replyto" value={formState.email} />

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
                                            <label htmlFor="p-service">Required Service</label>
                                            <input 
                                                id="p-service"
                                                type="text" 
                                                name="service" 
                                                value={formState.service} 
                                                onChange={handleChange}
                                                placeholder="Select a Service" 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="p-product">Required Product</label>
                                            <input 
                                                id="p-product"
                                                type="text" 
                                                name="product" 
                                                value={formState.product} 
                                                onChange={handleChange}
                                                placeholder="Select a Product" 
                                            />
                                        </div>
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
                                        className={`proposal-submit-btn ${status === 'success' ? 'proposal-submit-btn--success' : ''} ${status === 'error' ? 'proposal-submit-btn--error' : ''}`}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' && (
                                            <>
                                                <Loader2 size={18} className="spin-icon" />
                                                <span>Submitting...</span>
                                            </>
                                        )}
                                        {status === 'success' && (
                                            <>
                                                <Check size={18} />
                                                <span>Submitted Successfully!</span>
                                            </>
                                        )}
                                        {status === 'error' && (
                                            <>
                                                <span>Retry Submission</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                        {status === 'idle' && (
                                            <>
                                                <span>Submit</span>
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>

                                    {status === 'error' && errorMessage && (
                                        <div className="contact-form-error-banner">
                                            <AlertCircle size={18} className="error-banner-icon" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Interactive Industrial Map Section (Reference Style) ─── */}
            <section className="contact-map-section">
                {/* Embedded Map Container */}
                <div className="contact-map-container">
                    <iframe
                        title="Vishal Enterprises Location Map"
                        src={activeLoc.mapQuery}
                        className="contact-map-iframe"
                        loading="lazy"
                        allowFullScreen=""
                    ></iframe>

                    {/* Floating Info Card on Map (Matching Reference) */}
                    <div className="map-floating-overlay-card gs-animate" data-animate="fade-right">
                        <div className="map-card-tabs">
                            <button 
                                className={`map-tab-btn ${selectedLocation === 'dhule' ? 'active' : ''}`}
                                onClick={() => setSelectedLocation('dhule')}
                            >
                                Dhule (Plant)
                            </button>
                            <button 
                                className={`map-tab-btn ${selectedLocation === 'pune' ? 'active' : ''}`}
                                onClick={() => setSelectedLocation('pune')}
                            >
                                Pune (Office)
                            </button>
                        </div>

                        <div className="map-card-tag-row">
                            <span className="map-card-dot"></span>
                            <span className="map-card-tag">{activeLoc.title}</span>
                        </div>

                        <h3 className="map-card-name">{activeLoc.name}</h3>
                        <p className="map-card-address">{activeLoc.address}</p>

                        <a 
                            href={activeLoc.directionsLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="map-card-directions-link"
                        >
                            <span>GET DIRECTIONS</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};
