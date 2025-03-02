import React from 'react';
import clsx from 'clsx';
import styles from './TwoColBox.module.css';

export default function TwoColBox({
    leftContent,
    rightContent,
    variant = '5050',  // Options: 5050, leftWide, rightWide
    align = 'top',     // Options: top, center, stretch
    customStyles = {}
}) {
    return (
        <div className={clsx(styles.twoColumnBox, styles[`variant-${variant}`])} style={customStyles.outer}>
            {/* Left Column */}
            <div className={clsx(styles.column, styles[`align-${align}`])} style={customStyles.left}>
                {leftContent}
            </div>

            {/* Right Column */}
            <div className={clsx(styles.column, styles[`align-${align}`])} style={customStyles.right}>
                {rightContent}
            </div>
        </div>
    );
}
