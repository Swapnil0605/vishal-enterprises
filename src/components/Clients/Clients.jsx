import React from 'react';
import { clientsData } from '../../data/clients';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Clients.css';

export const Clients = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section className="clients" id="clients" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header gs-animate" data-animate="fade-up">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>Trusted Partnerships</span>
                    </div>
                    <h2 className="section-title">
                        Powering India's<br />
                        <span className="title-accent">Leading Organizations</span>
                    </h2>
                    <p className="section-subtitle">
                        Supplying high-reliability control systems and electrical installations for major public sector undertakings and multinational corporations.
                    </p>
                </div>
            </div>

            <div className="clients-marquee gs-animate" data-animate="fade-up" data-delay="150">
                <div className="clients-track">
                    {/* First Loop */}
                    {clientsData.map((client, index) => (
                        <div key={`client-1-${index}`} className="client-logo-card">
                            <div className="client-logo-wrapper">
                                <img 
                                    src={client.logo} 
                                    alt={client.alt} 
                                    className="client-logo-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="client-meta">
                                <span className="client-name">{client.name}</span>
                                <span className="client-sub">{client.subtitle}</span>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate for seamless infinite loop */}
                    {clientsData.map((client, index) => (
                        <div key={`client-2-${index}`} className="client-logo-card">
                            <div className="client-logo-wrapper">
                                <img 
                                    src={client.logo} 
                                    alt={client.alt} 
                                    className="client-logo-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="client-meta">
                                <span className="client-name">{client.name}</span>
                                <span className="client-sub">{client.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
