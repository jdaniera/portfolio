import React, { useState, useEffect } from 'react';
import styles from './SideNav.module.css';


export default function SideNav({ sections = [] }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
    const [isHovered, setIsHovered] = useState(false); // NEW: hover state

    useEffect(() => {
        const handleScroll = () => {
            setIsCollapsed(window.scrollY > window.innerHeight);
        };

        const handleSectionHighlight = () => {
            let currentSection = sections[0]?.id || '';
            sections.forEach(({ id }) => {
                const sectionElement = document.getElementById(id);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleSectionHighlight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleSectionHighlight);
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
                    {/* Only show text if either it's not collapsed OR user is hovering */}
                    {(!isCollapsed || isHovered) && <p>{name}</p>}
                    <div className={`${styles.dot} ${activeSection === id ? styles.activeDot : ''}`} />
                </div>
            ))}
        </div>
    );
}
