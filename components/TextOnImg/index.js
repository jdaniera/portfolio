import React from 'react';
import styles from './TextOnImg.module.css';

export default function TextOnImg({ 
    imageSrc, 
    altText = '', 
    title, 
    description, 
    textPosition = 'center' 
}) {
    return (
        <div className={`${styles.container} ${styles[textPosition]}`}>
            <img src={imageSrc} alt={altText} className={styles.image} />
            <div className={styles.textBox}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
