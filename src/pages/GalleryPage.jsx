import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { galleryItems } from '../data/gallery';
import { 
    Home as HomeIcon, 
    ChevronRight, 
    ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './GalleryPage.css';

export const GalleryPage = () => {
    const sectionRef = useScrollAnimation();

    return (
        <div className="gallery-page-wrapper">
            <Navbar />

            {/* ─── Hero Page Panoramic Banner (Reference Style) ─── */}
            <div className="gallery-panoramic-hero">
                <div className="section-container gallery-hero-inner">
                    <div className="breadcrumb-trail gallery-breadcrumb">
                        <Link to="/" className="breadcrumb-link">
                            <HomeIcon size={14} />
                            <span>Home</span>
                        </Link>
                        <ChevronRight size={14} className="breadcrumb-sep" />
                        <span className="breadcrumb-active">Gallery</span>
                    </div>

                    <div className="gallery-hero-text">
                        <h1 className="gallery-panoramic-title">Our Gallery</h1>
                        <p className="gallery-panoramic-subtitle">
                            A Journey of Excellence: Captured in Every Moment, Framed with Pride
                        </p>
                    </div>
                </div>
            </div>

            {/* ─── Gallery Grid Section ─── */}
            <section className="gallery-main-section" ref={sectionRef}>
                <div className="section-container">
                    {/* Responsive Gallery Grid */}
                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div 
                                key={item.id}
                                className="gallery-photo-card gs-animate"
                                data-animate="fade-up"
                                data-delay={(index % 4) * 50}
                            >
                                <div className="gallery-photo-frame">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="gallery-photo-img"
                                        loading="lazy"
                                    />

                                    {/* Hover Short Description Banner Overlay (Reference Style) */}
                                    <div className="gallery-hover-banner">
                                        <p className="gallery-hover-caption">{item.caption || item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Bottom Panoramic CTA Banner ─── */}
            <section className="gallery-cta-section">
                <div className="section-container">
                    <div className="gallery-cta-card">
                        <div className="gallery-cta-bg">
                            <img 
                                src="/images/cta-bg.jpg" 
                                alt="Industrial Electrical Panel Manufacturing" 
                                className="gallery-cta-bg-img"
                            />
                            <div className="gallery-cta-gradient"></div>
                        </div>

                        <div className="gallery-cta-content">
                            <div className="gallery-cta-text">
                                <h2>Require a Custom Control Console or Testing Service?</h2>
                                <p>Our senior electrical engineers review tender drawings, SLDs and site specifications to provide comprehensive commercial proposals within 24 hours.</p>
                            </div>
                            <Link to="/contact" className="gallery-cta-btn">
                                <span>Request a Quote →</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};
