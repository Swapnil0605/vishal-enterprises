import React from 'react';
import { CalendarDays, Briefcase, Users, Factory, Award, CheckCircle2 } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Stats.css';

export const Stats = () => {
    const sectionRef = useScrollAnimation();
    const yearsCounter = useCounter(35, 2);
    const projectsCounter = useCounter(500, 2.5);
    const professionalsCounter = useCounter(50, 2);
    const industriesCounter = useCounter(7, 1.8);

    return (
        <section className="stats-section" id="stats" ref={sectionRef}>
            {/* Giant Background Watermark Text ("in Numbers") */}
            <div className="stats-watermark-text" aria-hidden="true">
                in Numbers
            </div>

            <div className="section-container stats-container">
                <div className="stats-grid">
                    {/* Stat Block 1 */}
                    <div className="stat-block gs-animate" data-animate="fade-up" data-delay="100" ref={yearsCounter.elementRef}>
                        <div className="stat-icon-wrapper">
                            <CalendarDays size={28} className="stat-icon" />
                        </div>
                        <div className="stat-number-wrap">
                            <span className="stat-number">{yearsCounter.count}</span>
                            <span className="stat-plus">+</span>
                        </div>
                        <h3 className="stat-title">Years Experience</h3>
                        <p className="stat-subtitle">Over 35 Years of Engineering Excellence</p>
                    </div>

                    {/* Stat Block 2 */}
                    <div className="stat-block gs-animate" data-animate="fade-up" data-delay="200" ref={projectsCounter.elementRef}>
                        <div className="stat-icon-wrapper">
                            <Briefcase size={28} className="stat-icon" />
                        </div>
                        <div className="stat-number-wrap">
                            <span className="stat-number">{projectsCounter.count}</span>
                            <span className="stat-plus">+</span>
                        </div>
                        <h3 className="stat-title">Projects Delivered</h3>
                        <p className="stat-subtitle">Executed with 100% Quality & Compliance</p>
                    </div>

                    {/* Stat Block 3 */}
                    <div className="stat-block gs-animate" data-animate="fade-up" data-delay="300" ref={professionalsCounter.elementRef}>
                        <div className="stat-icon-wrapper">
                            <Users size={28} className="stat-icon" />
                        </div>
                        <div className="stat-number-wrap">
                            <span className="stat-number">{professionalsCounter.count}</span>
                            <span className="stat-plus">+</span>
                        </div>
                        <h3 className="stat-title">Skilled Engineers</h3>
                        <p className="stat-subtitle">Certified Automation & Field Specialists</p>
                    </div>

                    {/* Stat Block 4 */}
                    <div className="stat-block gs-animate" data-animate="fade-up" data-delay="400" ref={industriesCounter.elementRef}>
                        <div className="stat-icon-wrapper">
                            <Factory size={28} className="stat-icon" />
                        </div>
                        <div className="stat-number-wrap">
                            <span className="stat-number">{industriesCounter.count}</span>
                            <span className="stat-plus">+</span>
                        </div>
                        <h3 className="stat-title">Industries Served</h3>
                        <p className="stat-subtitle">Refineries, Power, Steel & Infrastructure</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
