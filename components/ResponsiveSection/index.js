import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./ResponsiveSection.module.css";

export default function ResponsiveSection({ 
    id = "", // Add this line
    children, 
    desktopStyle = {}, 
    mobileVariant = "" 
}) {
    const isMobile = useMediaQuery("(max-width: 840px)");

    return (
        <div
            id={id} 
            className={isMobile ? styles[mobileVariant] : ""}
            style={!isMobile ? desktopStyle : {}}
        >
            {children}
        </div>
    );
}
