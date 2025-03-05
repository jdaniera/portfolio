import React from "react";
import clsx from "clsx";
import styles from "./SectionBox.module.css"; 

/**
    variants:
    -fullWidth
    -twoColumn
    -framed
**/

export default function SectionBox({
    variant = "fullWidth",
    background = "transparent",
    innerBackground = "transparent",
    frame = false,
    columns = { mobile: 1, tablet: 1, desktop: 1 },
    padding = "medium",
    rounded = false,
    children
}) {
    const columnClass = clsx(
        styles.sectionBox,
        styles[`columns-${columns.mobile}`],
        styles[`padding-${padding}`],
        {
            [styles.rounded]: rounded,
            [styles.framed]: frame,
            [styles[`variant-${variant}`]]: variant,
        }
    );

    return (
        <div
            className={clsx(styles.outerContainer)}
            style={{ backgroundColor: background }}
        >
            <div
                className={columnClass}
                style={{
                    backgroundColor: innerBackground,
                    gridTemplateColumns: getGridTemplate(columns),
                }}
            >
                {children}
            </div>
        </div>
    );
}

function getGridTemplate({ mobile, tablet, desktop }) {
    return `repeat(var(--current-columns, ${mobile}), 1fr)`;
}
