import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData, getProductBySlug } from '../data/products';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ChevronRight, 
    Home as HomeIcon, 
    Check, 
    ShieldCheck, 
    Phone, 
    Mail, 
    ArrowRight, 
    Award,
    Factory,
    ArrowUpRight,
    Cpu
} from 'lucide-react';
import './ProductDetailPage.css';

export const ProductDetailPage = () => {
    const { slug } = useParams();
    const product = getProductBySlug(slug);

    // If slug doesn't exist, redirect to /products
    if (!product) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="product-detail-page-wrapper">
            <Navbar />

            {/* ─── Breadcrumb Banner ─── */}
            <div className="product-detail-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <Link to="/products" className="breadcrumb-link">
                            <span>Products</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">{product.title}</span>
                    </div>

                    <div className="product-header-row">
                        <div>
                            <span className="product-detail-badge">#{product.num} • {product.category}</span>
                            <h1 className="product-detail-title">{product.fullTitle || product.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Main Two-Column Layout (Sidebar + Detailed Content) ─── */}
            <section className="product-detail-body-section">
                <div className="section-container">
                    <div className="product-detail-layout">
                        
                        {/* ─── Left Sidebar: Products Menu & Consultation Box ─── */}
                        <aside className="product-detail-sidebar">
                            {/* 1. All Products Quick Navigation Directory */}
                            <div className="sidebar-widget products-menu-widget">
                                <h3 className="sidebar-widget-title">Product Catalog Directory</h3>
                                <ul className="sidebar-products-list">
                                    {productsData.map((item) => {
                                        const isActive = item.slug === product.slug;
                                        return (
                                            <li key={item.id}>
                                                <Link 
                                                    to={`/products/${item.slug}`}
                                                    className={`sidebar-product-link ${isActive ? 'active' : ''}`}
                                                >
                                                    <span className="sidebar-link-text">{item.title}</span>
                                                    <ChevronRight size={15} className="sidebar-arrow" />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* 2. Direct Engineering Consultation Card */}
                            <div className="sidebar-widget consultation-widget">
                                <div className="consultation-icon-box">
                                    <Phone size={24} />
                                </div>
                                <h4>Need Custom Specifications?</h4>
                                <p>Speak directly with our technical design and manufacturing leads.</p>
                                
                                <div className="consultation-contact-info">
                                    <div className="consult-row">
                                        <Phone size={16} className="contact-ic" />
                                        <a href="tel:+918275580423">+91 8275 580 423</a>
                                    </div>
                                    <div className="consult-row">
                                        <Mail size={16} className="contact-ic" />
                                        <a href="mailto:vishal_enterprises@rediffmail.com">vishal_enterprises@rediffmail.com</a>
                                    </div>
                                </div>

                                <Link 
                                    to="/contact" 
                                    state={{ product: product.title, subject: product.title }}
                                    className="consult-cta-btn"
                                >
                                    <span>Enquire Now</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </aside>

                        {/* ─── Right Content: Detail Breakdown ─── */}
                        <main className="product-detail-main">
                            {/* Hero Product Photograph */}
                            <div className="product-main-photo-card">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="product-main-img" 
                                />
                                <div className="product-photo-badge">
                                    <ShieldCheck size={16} />
                                    <span>{product.standard}</span>
                                </div>
                            </div>

                            {/* Comprehensive Overview */}
                            <div className="product-content-block">
                                <h2 className="product-block-title">Equipment Overview & Technical Architecture</h2>
                                <p className="product-lead-desc">{product.overview || product.shortDesc}</p>
                            </div>

                            {/* Key Technical Features */}
                            {product.features && product.features.length > 0 && (
                                <div className="product-content-block">
                                    <h3 className="product-block-subtitle">Key Engineering Features</h3>
                                    <div className="product-features-grid">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="product-feature-item">
                                                <div className="feature-check-icon">
                                                    <Check size={16} />
                                                </div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Technical Specifications Table */}
                            {product.specifications && product.specifications.length > 0 && (
                                <div className="product-content-block">
                                    <h3 className="product-block-subtitle">Technical Parameters & Specifications</h3>
                                    <div className="product-specs-table-wrap">
                                        <table className="product-specs-table">
                                            <tbody>
                                                {product.specifications.map((spec, idx) => (
                                                    <tr key={idx}>
                                                        <td className="spec-label-cell">{spec.label}</td>
                                                        <td className="spec-value-cell">{spec.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Industry Applications */}
                            {product.applications && product.applications.length > 0 && (
                                <div className="product-content-block">
                                    <h3 className="product-block-subtitle">Target Industry Applications</h3>
                                    <div className="product-apps-tags">
                                        {product.applications.map((app, idx) => (
                                            <span key={idx} className="product-app-pill">
                                                <Factory size={13} />
                                                <span>{app}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Direct Quote Request CTA Banner */}
                            <div className="product-quote-banner">
                                <div className="quote-banner-text">
                                    <span className="quote-tag">DIRECT OEM PROCUREMENT</span>
                                    <h3>Send Product Enquiry</h3>
                                    <p>Receive technical data sheets, general arrangement (GA) drawings and customized commercial pricing within 24 hours.</p>
                                </div>
                                <Link 
                                    to="/contact" 
                                    state={{ product: product.title, subject: product.title }}
                                    className="quote-banner-btn"
                                >
                                    <span>Enquire Now</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>

                        </main>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};
