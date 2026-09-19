import React from 'react';
import { Link } from 'react-router-dom';
import { additionalProductsData } from '../data/additionalProducts';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ArrowUpRight, 
    Home as HomeIcon, 
    ChevronRight,
    Send
} from 'lucide-react';
import './AdditionalProductsPage.css';

export const AdditionalProductsPage = () => {
    return (
        <div className="additional-products-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner ─── */}
            <div className="additional-products-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">Additional Products & Spares</span>
                    </div>

                    <h1 className="additional-products-title">
                        Industrial Spares, Components & <span className="title-accent">Additional Products</span>
                    </h1>
                    <p className="additional-products-subtitle">
                        Comprehensive inventory of branded switchgears, flameproof fittings, power supplies, cables, sensors, busbars, and specialized substation accessories.
                    </p>
                </div>
            </div>

            {/* ─── Main Products Grid Section (Image & Name Below) ─── */}
            <section className="additional-products-section">
                <div className="section-container">

                    {/* Products Grid */}
                    <div className="additional-grid">
                        {additionalProductsData.map((product) => (
                            <div key={product.id} className="additional-card">
                                {/* Product Image */}
                                <div className="additional-card-img-wrap">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="additional-card-img" 
                                        loading="lazy" 
                                    />
                                </div>

                                {/* Product Name Below Image */}
                                <div className="additional-card-details">
                                    <h3 className="additional-card-name">{product.name}</h3>
                                    
                                    <div className="additional-card-action">
                                        <Link 
                                            to="/contact" 
                                            state={{ product: product.name, subject: `Enquiry for ${product.name}` }}
                                            className="additional-enquiry-btn"
                                        >
                                            <span>Enquire Now</span>
                                            <Send size={13} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ─── Bottom CTA Banner ─── */}
            <div className="additional-cta-banner">
                <div className="section-container">
                    <div className="additional-cta-card">
                        <div className="additional-cta-text">
                            <h3>Need Bulk Spares, OEM Supply or Custom Specifications?</h3>
                            <p>We supply genuine electrical accessories, industrial spares, switchgears, and custom fabricated components with fast turnaround times and GST compliant invoicing.</p>
                        </div>
                        <Link to="/contact" className="additional-cta-btn">
                            <span>Get a Quick Quote</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};
