import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, 
    X, 
    ArrowUpRight, 
    ChevronDown, 
    ArrowRight,
    ArrowLeft,
    Search
} from 'lucide-react';
import './Navbar.css';

const servicesMegaColumns = [
    {
        items: [
            { name: "AMC, SITC & Turnkey Trading", slug: "amc-sitc-turnkey-trading" },
            { name: "Thermography Analysis Service", slug: "thermography-analysis-service" }
        ]
    },
    {
        items: [
            { name: "Relay Testing", slug: "relay-testing" },
            { name: "ACB Servicing and Maintenance", slug: "acb-servicing-maintenance" }
        ]
    },
    {
        items: [
            { name: "VCB Servicing and Maintenance", slug: "vcb-servicing-maintenance" },
            { name: "Insulation Mat Testing", slug: "insulation-mat-testing" }
        ]
    },
    {
        items: [
            { name: "HT Works & Sub-Station Tests (Transformer)", slug: "ht-works-substation-tests" },
            { name: "Illumination (Lux) Level Analysis", slug: "illumination-lux-level-analysis" }
        ]
    }
];

const productsMegaColumns = [
    {
        items: [
            { name: "8 Zone Fire Alarm Control Panel", id: "8-zone-fire-alarm" },
            { name: "Advanced Fire Engine Control Panel", id: "advanced-fire-engine" },
            { name: "Compact Fire Siren Panel", id: "compact-fire-siren" },
            { name: "Fire Siren Control Panel", id: "industrial-fire-siren" },
            { name: "Jockey Pump Soft Starter Control Panel", id: "jockey-pump-soft-starter" }
        ]
    },
    {
        items: [
            { name: "Flameproof TT Earthing Relay", id: "flp-tt-earthing-relay" },
            { name: "Gas Detection Controller (FLP)", id: "flp-gas-detection" },
            { name: "Dyke Valve Position Indication Panel", id: "dyke-valve-position-panel" },
            { name: "Wireless Fire Pump or Jockey Pump Status Control Panels", id: "wireless-fire-jockey-pump-telemetry" },
            { name: "Digital WTI or OTI Controller with Simulation settings", id: "digital-wti-oti-controller" }
        ]
    },
    {
        items: [
            { name: "ATS Control Panel", id: "ats-control-panel" },
            { name: "UPS ACDB Panel", id: "ups-acdb-panel" },
            { name: "Servo Stabilisers", id: "servo-voltage-stabilizer" },
            { name: "VCB - AB Switch Interlock Control Panel", id: "vcb-ab-switch-interlock" },
            { name: "SOP Narrator", id: "sop-narrator" }
        ]
    },
    {
        items: [
            { name: "AC Sequential Control Panel", id: "ac-sequential-control" },
            { name: "AC Sequential Controllers", id: "ac-sequential-controllers" },
            { name: "Circuit Designing and Programming", id: "custom-circuit-plc" },
            { name: "PLC based Fully Automatic Star Delta Starter (FASD)", id: "plc-fasd-starter" },
            { name: "Fire Pump Duty Control Panel", id: "fire-pump-duty-control" }
        ]
    }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const servicesTimeoutRef = useRef(null);
    const productsTimeoutRef = useRef(null);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const allProducts = productsMegaColumns.flatMap(col => col.items);
    const allServices = servicesMegaColumns.flatMap(col => col.items);

    const filteredProducts = searchQuery.trim()
        ? allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];
    const filteredServices = searchQuery.trim()
        ? allServices.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];
    const hasSearchResults = filteredProducts.length > 0 || filteredServices.length > 0;

    const handleServicesEnter = () => {
        if (window.innerWidth <= 990) return;
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setProductsOpen(false);
        setServicesOpen(true);
    };

    const handleServicesLeave = () => {
        if (window.innerWidth <= 990) return;
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        servicesTimeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 220);
    };

    const handleProductsEnter = () => {
        if (window.innerWidth <= 990) return;
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        setServicesOpen(false);
        setProductsOpen(true);
    };

    const handleProductsLeave = () => {
        if (window.innerWidth <= 990) return;
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
        const nextState = !mobileOpen;
        setMobileOpen(nextState);
        document.body.style.overflow = nextState ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setServicesOpen(false);
        setProductsOpen(false);
        setMobileOpen(false);
        setSearchQuery('');
        document.body.style.overflow = '';
    };

    const handleServicesToggle = (e) => {
        if (window.innerWidth <= 990) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            setServicesOpen(prev => !prev);
            setProductsOpen(false);
        } else {
            closeMobileMenu();
        }
    };

    const handleProductsToggle = (e) => {
        if (window.innerWidth <= 990) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            setProductsOpen(prev => !prev);
            setServicesOpen(false);
        } else {
            closeMobileMenu();
        }
    };

    const handleCloseSubmenu = (e) => {
        if (e) {
            if (typeof e.preventDefault === 'function') e.preventDefault();
            if (typeof e.stopPropagation === 'function') e.stopPropagation();
        }
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setServicesOpen(false);
        setProductsOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-inner">
                {/* Enlarged VE Logo & Mobile View Header Details */}
                <Link to="/" className="nav-logo" onClick={closeMobileMenu} aria-label="Vishal Enterprises Home">
                    <img src="/images/logo.png" alt="Vishal Enterprises Official Logo" className="logo-img" />
                    <div className="nav-mobile-brand-banner">
                        <div className="mobile-brand-name">M/s VISHAL ENTERPRISES</div>
                        <div className="mobile-brand-license">Govt. Licensed Electrical Contractor - MC 34227</div>
                        <div className="mobile-brand-iso">An ISO 9001:2015 Company, GEM Accredited OEM</div>
                    </div>
                </Link>

                {/* Dark semi-transparent backdrop overlay for left-sliding drawer */}
                <div 
                    className={`nav-backdrop ${mobileOpen ? 'open' : ''}`} 
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />

                <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {/* Mobile Drawer Top Header with Brand Name and Close Button */}
                    <div className="mobile-drawer-header">
                        <div className="mobile-drawer-brand">
                            <span className="mobile-drawer-title">VISHAL ENTERPRISES</span>
                        </div>
                        <button 
                            type="button" 
                            className="mobile-drawer-close-btn" 
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Mobile Drawer Search Bar */}
                    <div className="mobile-drawer-search">
                        <div className="drawer-search-box">
                            <Search size={16} className="drawer-search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="drawer-search-input"
                            />
                            {searchQuery && (
                                <button 
                                    type="button" 
                                    className="drawer-search-clear"
                                    onClick={() => setSearchQuery('')}
                                    aria-label="Clear search"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Live Search Results view when user types */}
                    {searchQuery.trim() ? (
                        <div className="drawer-search-results">
                            {filteredProducts.length > 0 && (
                                <div className="drawer-results-group">
                                    <div className="drawer-results-category">PRODUCTS ({filteredProducts.length})</div>
                                    {filteredProducts.map((p, idx) => (
                                        <Link 
                                            key={idx} 
                                            to={`/products/${p.id}`} 
                                            className="drawer-result-item" 
                                            onClick={closeMobileMenu}
                                        >
                                            <span>{p.name}</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {filteredServices.length > 0 && (
                                <div className="drawer-results-group">
                                    <div className="drawer-results-category">SERVICES ({filteredServices.length})</div>
                                    {filteredServices.map((s, idx) => (
                                        <Link 
                                            key={idx} 
                                            to={`/services/${s.slug}`} 
                                            className="drawer-result-item" 
                                            onClick={closeMobileMenu}
                                        >
                                            <span>{s.name}</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {!hasSearchResults && (
                                <div className="drawer-no-results">
                                    No products or services found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Standard Nav Menu List */
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

                            {/* ─── Services Mega Dropdown ─── */}
                            <li 
                                className={`nav-item-mega ${servicesOpen ? 'open' : ''}`}
                                onMouseEnter={handleServicesEnter}
                                onMouseLeave={handleServicesLeave}
                            >
                                <Link 
                                    to="/services" 
                                    className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''} ${servicesOpen ? 'open' : ''}`} 
                                    onClick={handleServicesToggle}
                                >
                                    <span>Services</span>
                                    <ChevronDown size={15} className={`dropdown-chevron ${servicesOpen ? 'open' : ''}`} />
                                </Link>

                                <div 
                                    className="mega-dropdown"
                                    onMouseEnter={handleServicesEnter}
                                    onMouseLeave={handleServicesLeave}
                                >
                                    <div className="mobile-submenu-top-bar">
                                        <button 
                                            type="button" 
                                            className="mobile-submenu-back-btn"
                                            onClick={handleCloseSubmenu}
                                            aria-label="Back to main menu"
                                        >
                                            <ArrowLeft size={16} />
                                            <span>Back</span>
                                        </button>
                                        <span className="mobile-submenu-heading">Services</span>
                                    </div>

                                    <div className="mega-view-all-header">
                                        <Link 
                                            to="/services" 
                                            className="mega-view-all-action"
                                            onClick={closeMobileMenu}
                                        >
                                            <span>Explore All Services & Scope</span>
                                            <ArrowRight size={15} />
                                        </Link>
                                    </div>

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

                            {/* ─── Products Mega Dropdown ─── */}
                            <li 
                                className={`nav-item-mega ${productsOpen ? 'open' : ''}`}
                                onMouseEnter={handleProductsEnter}
                                onMouseLeave={handleProductsLeave}
                            >
                                <Link 
                                    to="/products" 
                                    className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/products') ? 'active' : ''} ${productsOpen ? 'open' : ''}`} 
                                    onClick={handleProductsToggle}
                                >
                                    <span>Products</span>
                                    <ChevronDown size={15} className={`dropdown-chevron ${productsOpen ? 'open' : ''}`} />
                                </Link>

                                <div 
                                    className="mega-dropdown"
                                    onMouseEnter={handleProductsEnter}
                                    onMouseLeave={handleProductsLeave}
                                >
                                    <div className="mobile-submenu-top-bar">
                                        <button 
                                            type="button" 
                                            className="mobile-submenu-back-btn"
                                            onClick={handleCloseSubmenu}
                                            aria-label="Back to main menu"
                                        >
                                            <ArrowLeft size={16} />
                                            <span>Back</span>
                                        </button>
                                        <span className="mobile-submenu-heading">Products</span>
                                    </div>

                                    <div className="mega-view-all-header">
                                        <Link 
                                            to="/products" 
                                            className="mega-view-all-action"
                                            onClick={closeMobileMenu}
                                        >
                                            <span>Explore All Products & Solutions</span>
                                            <ArrowRight size={15} />
                                        </Link>
                                    </div>

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
                                    to="/additional-products" 
                                    className={`nav-link ${location.pathname === '/additional-products' ? 'active' : ''}`} 
                                    onClick={closeMobileMenu}
                                >
                                    Additional Products
                                </Link>
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
                                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="mobile-quote-li">
                                <Link 
                                    to="/contact" 
                                    className="nav-cta-btn" 
                                    onClick={closeMobileMenu}
                                >
                                    <span>Get a Quote</span>
                                    <ArrowUpRight size={16} className="cta-arrow" />
                                </Link>
                            </li>
                        </ul>
                    )}
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
