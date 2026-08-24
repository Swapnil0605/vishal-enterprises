import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin, 
    Mail, 
    ChevronRight, 
    ArrowUpRight
} from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-top">
                <div className="section-container">
                    <div className="footer-grid">
                        {/* ─── Column 1: Brand & Social Media ─── */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="Vishal Enterprises Official Logo" />
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">VISHAL ENTERPRISES</span>
                                    <span className="footer-logo-tagline">Engineering Excellence Since 1990</span>
                                </div>
                            </div>
                            <p className="footer-about">
                                A GeM-accredited OEM and ISO 9001:2015 certified manufacturer specializing in industrial control panels, automation systems, and electrical engineering solutions for India's critical infrastructure.
                            </p>

                            {/* Social Media Links */}
                            <div className="footer-social-row">
                                <a 
                                    href="https://www.instagram.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Vishal Enterprises on Instagram"
                                    className="footer-social-btn"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.facebook.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Vishal Enterprises on Facebook"
                                    className="footer-social-btn"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Connect with Vishal Enterprises on LinkedIn"
                                    className="footer-social-btn"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* ─── Column 2: Quick Links ─── */}
                        <div className="footer-links-group">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/about"><ChevronRight size={14} /> About Our Enterprise</Link></li>
                                <li><Link to="/services"><ChevronRight size={14} /> All Services & Scope</Link></li>
                                <li><Link to="/gallery"><ChevronRight size={14} /> Project Gallery</Link></li>
                                <li><a href="/#products"><ChevronRight size={14} /> Product Range</a></li>
                                <li><a href="/#clients"><ChevronRight size={14} /> Trusted Clients</a></li>
                                <li><Link to="/contact"><ChevronRight size={14} /> Contact Our Team</Link></li>
                            </ul>
                        </div>

                        {/* ─── Column 3: Key Solutions ─── */}
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

                        {/* ─── Column 4: Operating Locations ─── */}
                        <div className="footer-links-group">
                            <h4>Operating Locations</h4>
                            <div className="footer-location">
                                <MapPin size={18} className="loc-icon" />
                                <div>
                                    <strong>Manufacturing Works (Dhule)</strong>
                                    <span>18, Keruji Nagar, Chakkarbardi Rd, Dhule 424001</span>
                                </div>
                            </div>

                            <div className="footer-location">
                                <MapPin size={18} className="loc-icon" />
                                <div>
                                    <strong>Regional Office (Pune)</strong>
                                    <span>P7, Thakar Nagar, Maan, Hinjewadi Ph 1, Pune 411057</span>
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

            {/* ─── Bottom Footer Bar ─── */}
            <div className="footer-bottom">
                <div className="section-container">
                    <div className="footer-bottom-inner">
                        <p className="footer-copyright">&copy; {new Date().getFullYear()} Vishal Enterprises. All rights reserved.</p>
                        
                        <div className="footer-credits">
                            <span>Designed and Developed by </span>
                            <a 
                                href="https://qirotec.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="qiro-credit-link"
                            >
                                <strong>QIRO TECH INNOVATION PVT LTD</strong>
                                <ArrowUpRight size={14} className="qiro-arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
