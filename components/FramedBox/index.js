import React from 'react';
import clsx from 'clsx';
import styles from './FramedBox.module.css';

export default function FramedBox({
    outerBg = 'var(--beige)',
    innerBg = 'var(--taupe)',
    innerRounded = false,
    innerWidth = '73%',
    innerHeight = '60%',
    innerMarginTop = '0',
    marginTop = '0',        
    marginBottom = '0',        
    children,
}) {
    return (
        <div 
            className={styles.outer}
            style={{ 
                backgroundColor: outerBg,
                marginTop,            // Apply marginTop from prop
                marginBottom          // Apply marginBottom from prop
            }}
        >
            {/* Inner background block (positioned & smaller than full container) */}
            <div 
                className={clsx(styles.innerBackground, innerRounded && styles.rounded)}
                style={{ 
                    backgroundColor: innerBg,
                    width: innerWidth,
                    height: innerHeight,
                    marginTop: innerMarginTop
                }}
            />

            {/* Content (like BoxTwo components) */}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
