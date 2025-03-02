import React from 'react';
import styles from './FullWidth.module.css';

export default function FullWidth({ children, backgroundColor }) {
    return (
        <section className={styles.fullWidthSection} style={{ backgroundColor }}>
            {children}
        </section>
    );
};
