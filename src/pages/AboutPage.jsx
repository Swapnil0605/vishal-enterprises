import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    Home as HomeIcon, 
    ChevronRight, 
    Flame, 
    Cpu, 
    Wrench, 
    Building2, 
    Award, 
    Check,
    ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AboutPage.css';

export const AboutPage = () => {
    const profileRef = useScrollAnimation();
    const missionRef = useScrollAnimation();
    const whyUsRef = useScrollAnimation();

    return (
        <div className="about-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner ─── */}
            <div className="about-page-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">About Us</span>
                    </div>

                    <div className="about-hero-text">
                        <span className="about-hero-tag">ESTABLISHED 1990 • 35+ YEARS OF EXCELLENCE</span>
                        <h1 className="about-page-title">Precision Engineering & Innovation</h1>
                    </div>
                </div>
            </div>

            {/* ─── 1. Company Profile & Technical Heritage ─── */}
            <section className="about-profile-section" ref={profileRef}>
                <div className="section-container">
                    <div className="about-profile-grid">
                        {/* Left: Facility Visual & Certifications */}
                        <div className="about-profile-visual gs-animate" data-animate="fade-right">
                            <div className="profile-img-frame">
                                <img 
                                    src="/images/hero/mv-switchgear-facility.jpg" 
                                    alt="Vishal Enterprises Electrical Engineering & Panel Manufacturing Facility" 
                                    className="profile-main-img"
                                />
                                <div className="profile-badge-overlay">
                                    <Award size={18} className="badge-icon" />
                                    <div>
                                        <strong>Licensed Class-1 Contractor</strong>
                                        <span>Govt. of Maharashtra & GeM Accredited</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Narrative */}
                        <div className="about-profile-content gs-animate" data-animate="fade-left">
                            <div className="section-label">
                                <span className="label-line"></span>
                                <span>Company Profile</span>
                            </div>
                            <h2 className="section-title">
                                Engineering Integrity.<br />
                                <span className="title-accent">Built for High-Stakes Operations.</span>
                            </h2>
                            <p className="profile-lead-paragraph">
                                Founded with a clear vision to bridge indigenous manufacturing with high-precision electronics, Vishal Enterprises has grown into a trusted partner for public sector undertakings, multinational refineries and critical infrastructure developers.
                            </p>
                            <p className="profile-sub-paragraph">
                                Operating out of modern manufacturing facilities in <strong>Dhule</strong> and a strategic technical office in <strong>Pune</strong>, our multi-disciplinary engineering teams combine deep domain expertise in microprocessor programming, SCADA integration, custom sheet-metal fabrication and hazardous area engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 2. Mission & Vision Dual Command Panels ─── */}
            <section className="about-mission-vision-section" ref={missionRef}>
                <div className="section-container">
                    <div className="section-header text-center gs-animate" data-animate="fade-up">
                        <div className="section-label justify-center">
                            <span className="label-line"></span>
                            <span>Core Purpose</span>
                        </div>
                        <h2 className="section-title">
                            Our Mission & <span className="title-accent">Strategic Vision</span>
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Guided by foundational engineering ethics, precision craftsmanship and zero-compromise safety.
                        </p>
                    </div>

                    <div className="mission-vision-grid">
                        {/* Mission Card with Animated Target Aim */}
                        <div className="purpose-card-wrapper purpose-card-wrapper--mission gs-animate" data-animate="fade-right">
                            <div className="purpose-card-backdrop purpose-card-backdrop--red"></div>
                            <div className="purpose-card-main">
                                <div className="purpose-animated-icon-box purpose-animated-icon-box--red">
                                    <svg viewBox="0 0 64 64" width="56" height="56" className="aim-animated-svg">
                                        <circle cx="32" cy="32" r="26" className="aim-outer-ring" />
                                        <circle cx="32" cy="32" r="18" className="aim-mid-ring" />
                                        <line x1="32" y1="2" x2="32" y2="16" className="aim-crosshair" />
                                        <line x1="32" y1="48" x2="32" y2="62" className="aim-crosshair" />
                                        <line x1="2" y1="32" x2="16" y2="32" className="aim-crosshair" />
                                        <line x1="48" y1="32" x2="62" y2="32" className="aim-crosshair" />
                                        <circle cx="32" cy="32" r="7" className="aim-center-bullseye" />
                                        <circle cx="32" cy="32" r="3" className="aim-center-laser" />
                                    </svg>
                                </div>

                                <h3 className="purpose-card-title">MISSION</h3>

                                <p className="purpose-card-body">
                                    Our mission is to design, develop, manufacture and support high-quality electrical, electronic and automation solutions tailored to our customers' requirements. We are committed to combining practical engineering experience, innovative technology and dependable service to deliver safe, reliable and cost-effective solutions.
                                </p>

                                <div className="purpose-perks-list">
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic" /> Customer-tailored design & manufacturing</div>
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic" /> 35+ years practical engineering expertise</div>
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic" /> Safe, dependable and cost-effective execution</div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card with Animated Blinking Eye */}
                        <div className="purpose-card-wrapper purpose-card-wrapper--vision gs-animate" data-animate="fade-left">
                            <div className="purpose-card-backdrop purpose-card-backdrop--green"></div>
                            <div className="purpose-card-main">
                                <div className="purpose-animated-icon-box purpose-animated-icon-box--green">
                                    <svg viewBox="0 0 64 64" width="60" height="60" className="eye-animated-svg">
                                        <line x1="32" y1="4" x2="32" y2="12" className="eye-ray" />
                                        <line x1="15" y1="11" x2="21" y2="17" className="eye-ray" />
                                        <line x1="49" y1="11" x2="43" y2="17" className="eye-ray" />
                                        
                                        <g className="eye-blinking-group">
                                            <path 
                                                d="M 6 34 Q 32 14 58 34 Q 32 54 6 34 Z" 
                                                className="eye-contour" 
                                            />
                                            <circle cx="32" cy="34" r="9" className="eye-iris" />
                                            <circle cx="32" cy="34" r="4" className="eye-pupil" />
                                            <circle cx="34" cy="32" r="1.5" className="eye-glint" />
                                        </g>
                                    </svg>
                                </div>

                                <h3 className="purpose-card-title purpose-card-title--green">VISION</h3>

                                <p className="purpose-card-body">
                                    To be a trusted and innovative engineering solutions partner, delivering reliable electrical, electronics, automation and industrial control solutions that improve safety, efficiency and operational reliability for our customers.
                                </p>

                                <div className="purpose-perks-list">
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic perk-ic--green" /> Uncompromising industrial safety & reliability</div>
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic perk-ic--green" /> Intelligent micro-electronic control engineering</div>
                                    <div className="purpose-perk-item"><Check size={14} className="perk-ic perk-ic--green" /> Sustainable operational efficiency for clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. Why Choose Vishal Enterprises (4 Engineering Pillars) ─── */}
            <section className="about-why-choose-section" ref={whyUsRef}>
                <div className="section-container">
                    <div className="section-header gs-animate" data-animate="fade-up">
                        <div className="section-label">
                            <span className="label-line"></span>
                            <span>The Engineering Edge</span>
                        </div>
                        <h2 className="section-title">
                            Why Industry Leaders Choose <span className="title-accent">Vishal Enterprises</span>
                        </h2>
                        <p className="section-subtitle">
                            Four foundational pillars that distinguish our engineering solutions across demanding sectors.
                        </p>
                    </div>

                    <div className="pillars-grid">
                        {/* Pillar 1 */}
                        <div className="pillar-feature-card gs-animate" data-animate="fade-up" data-delay="100">
                            <div className="pillar-num-badge">01</div>
                            <div className="pillar-icon-wrap">
                                <Flame size={22} />
                            </div>
                            <h4>Hazardous Area Leadership</h4>
                            <p>
                                Specialized PESO-certified explosion-proof panel manufacturing built strictly to OISD-117 standards for Zone 1 and Zone 2 petroleum and chemical facilities.
                            </p>
                            <div className="pillar-tag-row">
                                <span>Zone 1 & 2 Ex-d</span>
                                <span>OISD-117</span>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="pillar-feature-card gs-animate" data-animate="fade-up" data-delay="200">
                            <div className="pillar-num-badge">02</div>
                            <div className="pillar-icon-wrap">
                                <Cpu size={22} />
                            </div>
                            <h4>In-House R&D Autonomy</h4>
                            <p>
                                Complete end-to-end design autonomy. We develop proprietary microprocessor firmware, Modbus gateways and customized mimic layouts in-house with zero external reliance.
                            </p>
                            <div className="pillar-tag-row">
                                <span>Microprocessor</span>
                                <span>SCADA Sync</span>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="pillar-feature-card gs-animate" data-animate="fade-up" data-delay="300">
                            <div className="pillar-num-badge">03</div>
                            <div className="pillar-icon-wrap">
                                <Wrench size={22} />
                            </div>
                            <h4>Turnkey Single-Source SITC</h4>
                            <p>
                                Single-source responsibility spanning Supply, Installation, Testing and Commissioning backed by 24/7 preventive Annual Maintenance Contracts (AMC).
                            </p>
                            <div className="pillar-tag-row">
                                <span>Turnkey SITC</span>
                                <span>24/7 AMC</span>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="pillar-feature-card gs-animate" data-animate="fade-up" data-delay="400">
                            <div className="pillar-num-badge">04</div>
                            <div className="pillar-icon-wrap">
                                <Building2 size={22} />
                            </div>
                            <h4>PSU & Public Sector Trust</h4>
                            <p>
                                Trusted by India's premier public sector undertakings including Indian Oil, Bharat Petroleum, HPCL and Honeywell Automation for critical national infrastructure.
                            </p>
                            <div className="pillar-tag-row">
                                <span>GeM OEM</span>
                                <span>Class-1 Licensed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4. Homepage Panoramic CTA Banner Section ─── */}
            <section className="about-cta-banner-section">
                <div className="section-container">
                    <div className="about-cta-card">
                        {/* Background Image & Gradient */}
                        <div className="about-cta-bg">
                            <img 
                                src="/images/cta-bg.jpg" 
                                alt="Industrial Electrical Control Panel Manufacturing Facility" 
                                className="about-cta-bg-img"
                            />
                            <div className="about-cta-gradient"></div>
                        </div>

                        {/* Content */}
                        <div className="about-cta-content">
                            <div className="about-cta-text">
                                <h2 className="about-cta-title">
                                    Require a Custom Engineered Control Solution?
                                </h2>
                                <p className="about-cta-subtitle">
                                    Our senior electrical and R&D engineers are available to review your project specifications and provide comprehensive proposals.
                                </p>
                            </div>

                            <div className="about-cta-action">
                                <Link 
                                    to="/contact"
                                    className="about-cta-button"
                                >
                                    <span>Request a Quote</span>
                                    <ArrowRight size={18} className="cta-arrow-ic" />
                                </Link>
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
