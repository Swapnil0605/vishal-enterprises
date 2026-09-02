import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, 
    X, 
    ArrowUpRight, 
    ChevronDown, 
    ArrowRight 
} from 'lucide-react';
import './Navbar.css';

const servicesMegaColumns = [
    {
        num: "01",
        category: "AUTOMATION & CONTROLS",
        items: [
            { name: "Customised Automation Panels", slug: "customised-automation-panels" },
            { name: "PLC Panels & Process Controls", slug: "plc-panels-process-controls" },
            { name: "VFD, FASD & PMCC Panels", slug: "vfd-fasd-pmcc-ro-utility-panels" },
            { name: "RO & Utility Control Panels", slug: "vfd-fasd-pmcc-ro-utility-panels" }
        ]
    },
    {
        num: "02",
        category: "FLAMEPROOF & SAFETY",
        items: [
            { name: "Flameproof (FLP) Control Panels", slug: "flp-control-panels-starters" },
            { name: "FLP Gas Detection & Simulation", slug: "flp-gas-detection-fire-simulation" },
            { name: "FLP Earthing Relay Interlocks", slug: "flp-earthing-relay-decantation" },
            { name: "Flameproof Audio-Visual Panels", slug: "flp-annunciation-audio-visual" }
        ]
    },
    {
        num: "03",
        category: "TESTING & COMMISSIONING",
        items: [
            { name: "Secondary Injection Relay Testing", slug: "secondary-injection-relay-testing" },
            { name: "Numerical Relay Configuration", slug: "numerical-relay-configuration-testing" },
            { name: "Substation Automation (SAS)", slug: "substation-automation-systems" },
            { name: "HV Breaker Timing & Testing", slug: "breaker-timing-dynamic-resistance" }
        ]
    },
    {
        num: "04",
        category: "MAINTENANCE & RETROFITTING",
        items: [
            { name: "Transformer Health & Filtration", slug: "transformer-testing-oil-filtration" },
            { name: "HT Switchgear Modernisation", slug: "ht-panel-retrofitting-modernisation" },
            { name: "Thermography & Power Audit", slug: "thermography-power-quality-audit" },
            { name: "Fire Pump Duty & Engine Panels", slug: "fire-engine-jockey-pump-panels" }
        ]
    }
];

const productsMegaColumns = [
    {
        num: "01",
        category: "FIRE & SAFETY SYSTEMS",
        items: [
            { name: "Advanced Fire Pump Controller", id: "fire-pump-adv" },
            { name: "Fire Pump Fail-Safe Logic Panel", id: "fire-pump-seq" },
            { name: "SOP Narrator Audio System", id: "sop-narrator" },
            { name: "Tank Level Annunciation Panel", id: "tank-level" }
        ]
    },
    {
        num: "02",
        category: "HAZARDOUS & FLAMEPROOF",
        items: [
            { name: "Flameproof Dyke Valve Panel", id: "flp-dyke-valve" },
            { name: "Gas Detection Controller (Bluetooth)", id: "gas-detection-bt" },
            { name: "Flameproof Fire Alarm Panel", id: "flp-fire-alarm" },
            { name: "Flameproof SOP Narrator Panel", id: "flp-sop-narrator" }
        ]
    },
    {
        num: "03",
        category: "POWER & DISTRIBUTION",
        items: [
            { name: "Graphical LCD Dual Battery Unit", id: "graphical-lcd" },
            { name: "Automatic Battery Changeover System", id: "dual-battery-auto" },
            { name: "Microprocessor ATS Transfer Unit", id: "ats-controller" },
            { name: "CNG Station APFC Panel", id: "cng-apfc" }
        ]
    },
    {
        num: "04",
        category: "AUTOMATION & PROCESS",
        items: [
            { name: "Multi-Compressor AC Sequential Panel", id: "ac-sequential" },
            { name: "RO Utility & Desalination Panel", id: "ro-utility" },
            { name: "Digital Safety Milestone Display", id: "accident-free-days" },
            { name: "FLP Earthing Relay Interlock", id: "flp-earthing" }
        ]
    }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const servicesTimeoutRef = useRef(null);
    const productsTimeoutRef = useRef(null);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleServicesEnter = () => {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setProductsOpen(false);
        setServicesOpen(true);
    };

    const handleServicesLeave = () => {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        servicesTimeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 220);
    };

    const handleProductsEnter = () => {
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        setServicesOpen(false);
        setProductsOpen(true);
    };

    const handleProductsLeave = () => {
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        productsTimeoutRef.current = setTimeout(() => {
            setProductsOpen(false);
        }, 220);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
            if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
        document.body.style.overflow = !mobileOpen ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setMobileOpen(false);
        setServicesOpen(false);
        setProductsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-inner">
                {/* Enlarged VE Logo */}
                <Link to="/" className="nav-logo" onClick={closeMobileMenu} aria-label="Vishal Enterprises Home">
                    <img src="/images/logo.png" alt="Vishal Enterprises Official Logo" className="logo-img" />
                </Link>

                <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            {isHomePage ? (
                                <a href="#hero" className="nav-link active" onClick={closeMobileMenu}>Home</a>
                            ) : (
                                <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                            )}
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>

                        {/* ─── Services Mega Dropdown (Qiro Tech Style) ─── */}
                        <li 
                            className={`nav-item-mega ${servicesOpen ? 'open' : ''}`}
                            onMouseEnter={handleServicesEnter}
                            onMouseLeave={handleServicesLeave}
                        >
                            <Link 
                                to="/services" 
                                className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                <span>Services</span>
                                <ChevronDown size={14} className="dropdown-chevron" />
                            </Link>

                            <div 
                                className="mega-dropdown"
                                onMouseEnter={handleServicesEnter}
                                onMouseLeave={handleServicesLeave}
                            >
                                <div className="mega-dropdown-inner">
                                    {servicesMegaColumns.map((col, idx) => (
                                        <div key={idx} className="mega-col">
                                            <ul className="mega-items-list">
                                                {col.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link 
                                                            to={`/services/${item.slug}`} 
                                                            className="mega-item-link"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            <span>{item.name}</span>
                                                            <ArrowRight size={14} className="mega-arrow" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="mega-bottom-strip">
                                    <span className="mega-strip-tagline">
                                        Turnkey Engineering, Automation Panels & Testing Solutions Across India
                                    </span>
                                </div>
                            </div>
                        </li>

                        {/* ─── Products Mega Dropdown (Qiro Tech Style) ─── */}
                        <li 
                            className={`nav-item-mega ${productsOpen ? 'open' : ''}`}
                            onMouseEnter={handleProductsEnter}
                            onMouseLeave={handleProductsLeave}
                        >
                            <Link 
                                to="/products" 
                                className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/products') ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                <span>Products</span>
                                <ChevronDown size={14} className="dropdown-chevron" />
                            </Link>

                            <div 
                                className="mega-dropdown"
                                onMouseEnter={handleProductsEnter}
                                onMouseLeave={handleProductsLeave}
                            >
                                <div className="mega-dropdown-inner">
                                    {productsMegaColumns.map((col, idx) => (
                                        <div key={idx} className="mega-col">
                                            <ul className="mega-items-list">
                                                {col.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link 
                                                            to={`/products/${item.id}`} 
                                                            className="mega-item-link"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            <span>{item.name}</span>
                                                            <ArrowRight size={14} className="mega-arrow" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="mega-bottom-strip">
                                    <span className="mega-strip-tagline">
                                        ISO 9001:2015 & GeM Accredited OEM Manufacturer • PESO / TAC Standards
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link 
                                to="/gallery" 
                                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={`nav-cta-btn ${location.pathname === '/contact' ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                <span>Get a Quote</span>
                                <ArrowUpRight size={16} className="cta-arrow" />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button 
                    className="nav-toggle" 
                    onClick={toggleMobileMenu} 
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileOpen ? <X size={26} color="#0f172a" /> : <Menu size={26} color="#0f172a" />}
                </button>
            </div>
        </header>
    );
};
