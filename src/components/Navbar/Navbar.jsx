import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
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
        document.body.style.overflow = '';
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-inner">
                <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <img src="/images/logo.jpeg" alt="Vishal Enterprises Logo" className="logo-img" />
                    <div className="logo-text">
                        <span className="logo-name">VISHAL</span>
                        <span className="logo-sub">ENTERPRISES</span>
                    </div>
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
                            <a href={isHomePage ? "#about" : "/#about"} className="nav-link" onClick={closeMobileMenu}>About Us</a>
                        </li>
                        <li>
                            <a href={isHomePage ? "#clients" : "/#clients"} className="nav-link" onClick={closeMobileMenu}>Clients</a>
                        </li>
                        <li>
                            <Link 
                                to="/services" 
                                className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <a href={isHomePage ? "#products" : "/#products"} className="nav-link" onClick={closeMobileMenu}>Products</a>
                        </li>
                        <li>
                            <a href={isHomePage ? "#contact" : "/#contact"} className="nav-cta-btn" onClick={closeMobileMenu}>
                                <span>Get a Quote</span>
                                <ArrowUpRight size={16} className="cta-arrow" />
                            </a>
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
