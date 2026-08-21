import React, { useState } from 'react';
import { Phone, Mail, Send, Check, Loader2, User, Building } from 'lucide-react';
import { allServicesList } from '../../data/services';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

export const Contact = () => {
    const sectionRef = useScrollAnimation();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
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
                setFormState({ name: '', email: '', phone: '', service: '', message: '' });
                setStatus('idle');
            }, 3000);
        }, 1200);
    };

    return (
        <section className="cta" id="contact" ref={sectionRef}>
            <div className="cta-bg-pattern"></div>

            <div className="section-container">
                <div className="cta-layout">
                    <div className="cta-content gs-animate" data-animate="fade-right">
                        <div className="section-label">
                            <span className="label-line"></span>
                            <span>Contact Our Engineering Team</span>
                        </div>

                        <h2 className="cta-title">
                            Ready to Engineer<br />
                            <span className="title-accent">Your Next Industrial Solution?</span>
                        </h2>

                        <p className="cta-text">
                            Whether you require a custom control panel, an automation retrofit, or comprehensive plant maintenance services, our engineering specialists are prepared to assist you.
                        </p>

                        <div className="cta-contacts">
                            <div className="cta-contact-item">
                                <div className="cta-contact-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="cta-contact-body">
                                    <span className="cta-contact-label">Director of Research and Development</span>
                                    <a href="tel:+918275580423" className="cta-contact-value">+91 8275 580 423</a>
                                    <span className="cta-contact-name">Mr. Vasant Mahajan</span>
                                </div>
                            </div>

                            <div className="cta-contact-item">
                                <div className="cta-contact-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="cta-contact-body">
                                    <span className="cta-contact-label">Sales and Business Development</span>
                                    <a href="tel:+917350833874" className="cta-contact-value">+91 7350 833 874</a>
                                    <span className="cta-contact-name">Mr. Vishal Mahajan</span>
                                </div>
                            </div>

                            <div className="cta-contact-item">
                                <div className="cta-contact-icon">
                                    <Mail size={22} />
                                </div>
                                <div className="cta-contact-body">
                                    <span className="cta-contact-label">Official Correspondence</span>
                                    <a href="mailto:vishalent@yahoo.co.in" className="cta-contact-value">vishalent@yahoo.co.in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-form-wrapper gs-animate" data-animate="fade-left">
                        <form className="cta-form" onSubmit={handleSubmit}>
                            <h3 className="cta-form-title">Request a Technical Proposal</h3>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your Full Name" 
                                    required 
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="Email Address" 
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        placeholder="Contact Number" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <select 
                                    name="service" 
                                    value={formState.service} 
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Required Service</option>
                                    {allServicesList.map((serviceName, index) => (
                                        <option key={index} value={serviceName}>
                                            {serviceName}
                                        </option>
                                    ))}
                                    <option value="Other Technical Inquiry">Other Technical Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <textarea 
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4" 
                                    placeholder="Describe your project requirements, technical specifications, or inquiry..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`btn btn-primary btn-full ${status === 'success' ? 'btn-success' : ''}`}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' && (
                                    <>
                                        <Loader2 size={18} className="spin-icon" />
                                        <span>Submitting Proposal Request...</span>
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
                                        <span>Submit Proposal Request</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
