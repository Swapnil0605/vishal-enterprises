import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Stats } from '../components/Stats/Stats';
import { About } from '../components/About/About';
import { Clients } from '../components/Clients/Clients';
import { Services } from '../components/Services/Services';
import { Products } from '../components/Products/Products';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';

export const Home = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Clients />
                <Services />
                <Products />
                <WhyUs />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};
