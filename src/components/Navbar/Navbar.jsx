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
        items: [
            { name: "Customised Automation Panels", slug: "customised-automation-panels" },
            { name: "PLC Panels & Process Controls", slug: "plc-panels-process-controls" },
            { name: "Fire Engine & Jockey Pump Panels", slug: "fire-engine-jockey-pump-panels" },
            { name: "VFD, FASD, PMCC & RO Utility", slug: "vfd-fasd-pmcc-ro-utility-panels" }
        ]
    },
    {
        items: [
            { name: "Siren & Dyke Valve Position Panels", slug: "siren-dyke-valve-position-panels" },
            { name: "Fire Alarm & Detection Panels", slug: "fire-alarm-detection-panels" },
            { name: "FLP Gas Detection & Simulation", slug: "flp-gas-detection-simulation" },
            { name: "FLP Earthing Relay & Monitoring", slug: "flp-earthing-relay-monitoring" }
        ]
    },
    {
        items: [
            { name: "Automatic Battery Changeover Panels", slug: "automatic-battery-changeover-panels" },
            { name: "WTI / OTI & Live Simulation", slug: "wti-oti-safety-alarms-simulation" },
            { name: "Energy Saving & Annunciation Panels", slug: "energy-saving-annunciation-panels" },
            { name: "Data Communication (Wireless/Modbus)", slug: "data-communication-wireless-modbus" }
        ]
    },
    {
        items: [
            { name: "HT Works & Sub-Station Tests", slug: "ht-works-substation-tests" },
            { name: "P4 & P6 Safety LED Displays", slug: "p4-p6-safety-led-displays" },
            { name: "Testing & Thermography Services", slug: "testing-thermography-services" },
            { name: "AMC, SITC & Turnkey Trading", slug: "amc-sitc-turnkey-trading" }
        ]
    }
];

const productsMegaColumns = [
    {
        items: [
            { name: "Advanced Fire Pump Controller", id: "fire-pump-adv" },
            { name: "Fire Pump Fail-Safe Logic Panel", id: "fire-pump-fail-safe" },
            { name: "SOP Narrator Audio System", id: "sop-narrator" },
            { name: "Tank Level Annunciation Panel", id: "tank-level" }
        ]
    },
    {
        items: [
            { name: "Flameproof Dyke Valve Panel", id: "flp-dyke-valve" },
            { name: "Gas Detection Controller (BT)", id: "gas-detection-bt" },
            { name: "Flameproof Fire Alarm Panel", id: "flp-fire-alarm" },
            { name: "Flameproof SOP Narrator Panel", id: "flp-sop-narrator" }
        ]
    },
    {
        items: [
            { name: "Graphical LCD Dual Battery Unit", id: "graphical-lcd" },
            { name: "Automatic Battery Changeover", id: "battery-changeover" },
            { name: "Microprocessor ATS Controller", id: "ats-controller" },
            { name: "CNG Station APFC Panel", id: "cng-apfc-panel" }
        ]
    },
    {
        items: [
            { name: "AC Sequential Control Panel", id: "ac-sequential" },
            { name: "RO Utility Automation Panel", id: "ro-utility-panel" },
            { name: "Accident-Free Days Display", id: "accident-free-days" },
            { name: "FLP Earthing Relay Interlock", id: "flp-earthing-relay" }
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
        setServicesOpen(false);
        setProductsOpen(false);
        setMobileOpen(false);
        document.body.style.overflow = '';
    };

    const handleServicesToggle = (e) => {
        if (window.innerWidth <= 990) {
            e.preventDefault();
            setServicesOpen(prev => !prev);
            setProductsOpen(false);
        } else {
            closeMobileMenu();
        }
    };

    const handleProductsToggle = (e) => {
        if (window.innerWidth <= 990) {
            e.preventDefault();
            setProductsOpen(prev => !prev);
            setServicesOpen(false);
        } else {
            closeMobileMenu();
        }
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
                                onClick={handleServicesToggle}
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
                                onClick={handleProductsToggle}
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
