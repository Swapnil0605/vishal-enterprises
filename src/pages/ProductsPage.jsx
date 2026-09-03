import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData, productCategories } from '../data/products';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { 
    ArrowUpRight, 
    ShieldCheck, 
    Home as HomeIcon, 
    ChevronRight,
    Flame,
    Cpu,
    Zap,
    Activity,
    ShieldAlert,
    Layers
} from 'lucide-react';
import './ProductsPage.css';

const getProductCategoryIcon = (category) => {
    switch(category) {
        case 'Fire & Safety':
            return <Flame size={18} />;
        case 'Hazardous Area':
            return <ShieldAlert size={18} />;
        case 'Automation & Controls':
            return <Cpu size={18} />;
        case 'Power Management':
            return <Zap size={18} />;
        case 'Process Monitoring':
            return <Activity size={18} />;
        default:
            return <Layers size={18} />;
    }
};

export const ProductsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProducts = activeFilter === 'all' 
        ? productsData 
        : productsData.filter(item => item.category === activeFilter);

    return (
        <div className="products-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Banner (Matching 70vh Architecture) ─── */}
            <div className="products-page-hero">
                <div className="section-container">
                    <div className="breadcrumb-trail">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">Products & Solutions</span>
                    </div>

                    <h1 className="products-page-title">
                        Engineered Industrial <span className="title-accent">Products & Consoles</span>
                    </h1>
                    <p className="products-page-subtitle">
                        Explore our complete line of indigenous fire pump controllers, PESO-certified explosion-proof consoles and microprocessor-based automation systems.
                    </p>
                </div>
            </div>

            {/* ─── YouTube-Style Compact Grid Section ─── */}
            <section className="products-yt-section">
                <div className="section-container">

                    {/* 4-Column YouTube-Style Products Grid */}
                    <div className="yt-products-grid">
                        {productsData.map((product) => (
                            <div key={product.id} className="yt-product-card" id={product.id}>
                                
                                {/* Enlarged Thumbnail Wrap */}
                                <Link to={`/products/${product.slug || product.id}`} className="yt-thumbnail-wrap">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="yt-thumbnail-img" 
                                        loading="lazy"
                                    />

                                    {/* YouTube Duration-Style Compliance Badge (Bottom Right) */}
                                    <div className="yt-duration-badge">
                                        <ShieldCheck size={12} />
                                        <span>{product.standard}</span>
                                    </div>
                                </Link>

                                {/* Metadata Content */}
                                <div className="yt-card-details">
                                    <div className="yt-meta-content">
                                        <Link to={`/products/${product.slug || product.id}`} className="yt-card-title-link">
                                            <h3 className="yt-card-title">{product.title}</h3>
                                        </Link>

                                        <div className="yt-card-meta-line">
                                            <span className="yt-meta-category">{product.category}</span>
                                        </div>

                                        {/* Action Explore / Quote Link */}
                                        <div className="yt-card-action">
                                            <Link 
                                                to={`/products/${product.slug || product.id}`}
                                                className="yt-explore-action-btn"
                                            >
                                                <span>Explore</span>
                                                <ArrowUpRight size={14} className="yt-arrow-icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Bottom CTA Banner ─── */}
            <div className="products-page-cta-banner">
                <div className="section-container">
                    <div className="products-cta-card">
                        <div className="products-cta-text">
                            <h3>Require a Custom Product Build or OEM Tender Specification?</h3>
                            <p>We manufacture custom enclosures, flameproof certification batches and tailored micro-controllers according to your site Single Line Diagrams.</p>
                        </div>
                        <Link to="/contact" className="products-cta-btn">
                            <span>Request a Quote</span>
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
