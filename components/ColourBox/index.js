import React from 'react';
import clsx from 'clsx';
import styles from './ColourBox.module.css';

export default function ColourBox({
    outerVariant = 'beige',
    innerVariant = 'white',
    outerRounded = false,
    innerRounded = false,
    customStyles = {},
    children,
}) {
    return (
        <div 
            className={clsx(
                styles.outer,
                styles[`variant${outerVariant.charAt(0).toUpperCase() + outerVariant.slice(1)}`],
                outerRounded && styles.rounded
            )}
            style={customStyles.outer}
        >
            <div 
                className={clsx(
                    styles.inner,
                    styles[`variant${innerVariant.charAt(0).toUpperCase() + innerVariant.slice(1)}`],
                    innerRounded && styles.rounded
                )}
                style={customStyles.inner}
            >
                {children}
            </div>
        </div>
    );
}
