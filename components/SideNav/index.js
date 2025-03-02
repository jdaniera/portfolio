import React, { useState, useEffect } from 'react';
import styles from './SideNav.module.css';

export default function SideNav({ sections = [] }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsCollapsed(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use IntersectionObserver to detect which section is in view
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: [0.2, 0.5, 0.8]  // Detect when 20%, 50%, 80% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, [sections]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`${styles.sideNav} ${isCollapsed ? styles.collapsed : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {sections.map(({ name, id }) => (
                <div
                    key={id}
                    className={styles.navItem}
                    onClick={() => scrollToSection(id)}
                >
                    {(!isCollapsed || isHovered) && <p>{name}</p>}
                    <div className={`${styles.dot} ${activeSection === id ? styles.activeDot : ''}`} />
                </div>
            ))}
        </div>
    );
}
