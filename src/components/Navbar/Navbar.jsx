import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, 
    X, 
    ArrowUpRight, 
    ChevronDown, 
    Cpu, 
    Activity, 
    Flame, 
    Zap, 
    ArrowRight 
} from 'lucide-react';
import './Navbar.css';

const servicesDropdownSections = [
    {
        title: "Automation & Control Panels",
        icon: <Cpu size={15} className="dropdown-section-icon" />,
        items: [
            { name: "Customised Automation Panels", slug: "customised-automation-panels" },
            { name: "PLC Panels & Process Controls", slug: "plc-panels-process-controls" },
            { name: "VFD, FASD & PMCC Panels", slug: "vfd-fasd-pmcc-ro-utility-panels" },
            { name: "Flameproof (FLP) Control Panels", slug: "flp-control-panels-starters" }
        ]
    },
    {
        title: "Testing & Maintenance Services",
        icon: <Activity size={15} className="dropdown-section-icon" />,
        items: [
            { name: "Relay Testing & Calibration", slug: "secondary-injection-relay-testing" },
            { name: "Substation Automation (SAS)", slug: "substation-automation-systems" },
            { name: "Transformer Health & Filtration", slug: "transformer-testing-oil-filtration" },
            { name: "Breaker Timing & Testing", slug: "breaker-timing-dynamic-resistance" }
        ]
    }
];

const productsDropdownSections = [
    {
        title: "Safety & Flameproof Systems",
        icon: <Flame size={15} className="dropdown-section-icon" />,
        items: [
            { name: "Fire Pump Duty Controllers", id: "fire-pump-adv" },
            { name: "Gas Detection with Bluetooth", id: "gas-detection-bt" },
            { name: "Flameproof Dyke Valve Panels", id: "flp-dyke-valve" },
            { name: "Flameproof SOP Narrator Panels", id: "flp-sop-narrator" }
        ]
    },
    {
        title: "Power, Monitoring & Displays",
        icon: <Zap size={15} className="dropdown-section-icon" />,
        items: [
            { name: "Tank Level Annunciation Panels", id: "tank-level" },
            { name: "Graphical LCD Dual Battery Units", id: "graphical-lcd" },
            { name: "Digital Accident-Free Displays", id: "accident-free-days" },
            { name: "Microprocessor ATS Transfer Units", id: "ats-controller" }
        ]
    }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
        document.body.style.overflow = !mobileOpen ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
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

                        {/* ─── Services with Two-Section Dropdown ─── */}
                        <li 
                            className={`nav-item-dropdown ${servicesOpen ? 'open' : ''}`}
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <Link 
                                to="/services" 
                                className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                <span>Services</span>
                                <ChevronDown size={14} className="dropdown-chevron" />
                            </Link>

                            <div className="nav-dropdown-menu two-section-dropdown">
                                <div className="dropdown-sections-container">
                                    {servicesDropdownSections.map((sec, idx) => (
                                        <div key={idx} className="dropdown-section-col">
                                            <div className="dropdown-section-header">
                                                {sec.icon}
                                                <h4>{sec.title}</h4>
                                            </div>
                                            <ul className="dropdown-items-list">
                                                {sec.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link 
                                                            to={`/services/${item.slug}`} 
                                                            className="dropdown-item-link"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            <span>{item.name}</span>
                                                            <ArrowRight size={13} className="item-arrow" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-footer-row">
                                    <Link to="/services" className="dropdown-view-all" onClick={closeMobileMenu}>
                                        <span>View All 16 Engineering Services</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        {/* ─── Products with Two-Section Dropdown ─── */}
                        <li 
                            className={`nav-item-dropdown ${productsOpen ? 'open' : ''}`}
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <Link 
                                to="/products" 
                                className={`nav-link nav-link-dropdown ${location.pathname === '/products' ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                <span>Products</span>
                                <ChevronDown size={14} className="dropdown-chevron" />
                            </Link>

                            <div className="nav-dropdown-menu two-section-dropdown">
                                <div className="dropdown-sections-container">
                                    {productsDropdownSections.map((sec, idx) => (
                                        <div key={idx} className="dropdown-section-col">
                                            <div className="dropdown-section-header">
                                                {sec.icon}
                                                <h4>{sec.title}</h4>
                                            </div>
                                            <ul className="dropdown-items-list">
                                                {sec.items.map((item, i) => (
                                                    <li key={i}>
                                                        <Link 
                                                            to="/products" 
                                                            className="dropdown-item-link"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            <span>{item.name}</span>
                                                            <ArrowRight size={13} className="item-arrow" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-footer-row">
                                    <Link to="/products" className="dropdown-view-all" onClick={closeMobileMenu}>
                                        <span>View All 16 Industrial Products</span>
                                        <ArrowRight size={14} />
                                    </Link>
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
