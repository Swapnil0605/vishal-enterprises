import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, ShieldCheck } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-top">
                <div className="section-container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/images/logo.jpeg" alt="Vishal Enterprises Official Logo" />
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">VISHAL ENTERPRISES</span>
                                    <span className="footer-logo-tagline">Engineering Excellence Since 1990</span>
                                </div>
                            </div>
                            <p className="footer-about">
                                A GeM-accredited OEM and ISO 9001:2015 certified manufacturer specializing in industrial control panels, automation systems, and electrical engineering solutions for India's critical infrastructure.
                            </p>
                        </div>

                        <div className="footer-links-group">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/#about"><ChevronRight size={14} /> About Our Enterprise</a></li>
                                <li><Link to="/services"><ChevronRight size={14} /> All Services & Scope</Link></li>
                                <li><a href="/#products"><ChevronRight size={14} /> Product Range</a></li>
                                <li><a href="/#clients"><ChevronRight size={14} /> Trusted Clients</a></li>
                                <li><a href="/#contact"><ChevronRight size={14} /> Contact Our Team</a></li>
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4>Key Solutions</h4>
                            <ul>
                                <li><Link to="/services/fire-engine-jockey-pump-panels"><ChevronRight size={14} /> Fire Pump Duty Controllers (FPDC)</Link></li>
                                <li><Link to="/services/flp-gas-detection-simulation"><ChevronRight size={14} /> Gas Detection & Simulation</Link></li>
                                <li><Link to="/services/flp-earthing-relay-monitoring"><ChevronRight size={14} /> Certified Flameproof (FLP) Panels</Link></li>
                                <li><Link to="/services/plc-panels-process-controls"><ChevronRight size={14} /> PLC & SCADA Automation Panels</Link></li>
                                <li><Link to="/services/vfd-fasd-pmcc-ro-utility-panels"><ChevronRight size={14} /> VFD & PMCC Control Centers</Link></li>
                                <li><Link to="/services/testing-thermography-services"><ChevronRight size={14} /> Relay Testing & Thermography</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4>Operating Locations</h4>
                            <div className="footer-location">
                                <MapPin size={18} className="loc-icon" />
                                <div>
                                    <strong>Manufacturing Works</strong>
                                    <span>Dhule, Maharashtra, India</span>
                                </div>
                            </div>

                            <div className="footer-location">
                                <MapPin size={18} className="loc-icon" />
                                <div>
                                    <strong>Regional Office</strong>
                                    <span>Pune, Maharashtra, India</span>
                                </div>
                            </div>

                            <div className="footer-location">
                                <Mail size={18} className="loc-icon" />
                                <div>
                                    <strong>Direct Inquiries</strong>
                                    <span>vishalent@yahoo.co.in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="section-container">
                    <div className="footer-bottom-inner">
                        <p>&copy; {new Date().getFullYear()} Vishal Enterprises. All rights reserved.</p>
                        <p className="footer-certs">Licensed Class-1 Electrical Contractor | GeM Accredited OEM | ISO 9001:2015 Certified</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
