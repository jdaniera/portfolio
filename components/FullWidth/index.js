// components/FullWidth.js
import React from 'react';
import styles from './FullWidth.module.css';

export default function FullWidth({ children, backgroundColor = "transparent" }) {
    return (
        <section
            className={styles.fullWidthSection}
            style={{ backgroundColor, width: "100vw", padding: 0, margin: 0 }}
        >
            <div className="gridContainer">
                <div style={{ gridColumn: "2 / span 14", padding: "4rem 0" }}>
                    {children}
                </div>
            </div>
        </section>
    );
}
