import React from 'react';
import { Clock, ShieldCheck, Building, Sliders, Wrench, Flame } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './WhyUs.css';

const advantages = [
    {
        num: '01',
        title: 'Over 35 Years of Proven Excellence',
        desc: 'Decades of specialized engineering experience delivering dependable electrical and electronic control solutions across critical infrastructure throughout India.',
        icon: Clock
    },
    {
        num: '02',
        title: 'Certified Quality and OEM Compliance',
        desc: 'ISO 9001:2015 certified manufacturing, GeM-accredited OEM status, and Class-1 government licensing ensure adherence to the highest industrial standards.',
        icon: ShieldCheck
    },
    {
        num: '03',
        title: 'Trusted by Leading Public Sector Enterprises',
        desc: 'A proven record of supplying high-reliability systems to industry leaders, including Indian Oil, Bharat Petroleum, HPCL, and Honeywell Automation.',
        icon: Building
    },
    {
        num: '04',
        title: 'Custom Design and In-House R&D',
        desc: 'Comprehensive in-house design capabilities spanning microprocessor programming, SCADA integration, custom sheet-metal fabrication, and Modbus architecture.',
        icon: Sliders
    },
    {
        num: '05',
        title: 'Turnkey Execution and Lifecycle Services',
        desc: 'Complete single-source responsibility covering concept engineering, panel assembly, testing, commissioning, and preventive annual maintenance contracts.',
        icon: Wrench
    },
    {
        num: '06',
        title: 'Certified Hazardous Area Engineering',
        desc: 'Specialized expertise in designing flameproof and explosion-proof control panels rated for Zone 1 and Zone 2 hazardous petroleum environments.',
        icon: Flame
    }
];

export const WhyUs = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section className="why-us" id="why-us" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header gs-animate" data-animate="fade-up">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>The Vishal Advantage</span>
                    </div>
                    <h2 className="section-title">
                        Why Industry Leaders<br />
                        <span className="title-accent">Partner with Vishal Enterprises</span>
                    </h2>
                    <p className="section-subtitle">
                        Our commitment to precision engineering, strict quality compliance, and responsive field support sets us apart across industrial sectors.
                    </p>
                </div>

                <div className="why-grid">
                    {advantages.map((adv, index) => {
                        const IconComponent = adv.icon;
                        return (
                            <div 
                                key={adv.num} 
                                className="why-card gs-animate"
                                data-animate="fade-up"
                                data-delay={index * 80}
                            >
                                <span className="why-card-number">{adv.num}</span>
                                <div className="why-card-icon">
                                    <IconComponent size={26} />
                                </div>
                                <h3>{adv.title}</h3>
                                <p>{adv.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
