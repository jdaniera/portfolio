import React, { useState } from "react";
import styles from "./FlipCard.module.css";
import clsx from "clsx";

const FlipCard = ({
  title,
  description,
  frontImage = null,
  backImage = null,
  imageAlt = "Image",
  customStyles = {},
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={clsx(styles.flipCard, isFlipped && styles.flipped)}
      style={customStyles.outer}
      onClick={handleFlip}
    >
      <div className={styles.flipCardInner}>
        {/* Front Side (title + tap message) */}
        <div className={clsx(styles.flipCardFace, styles.frontFace)}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.containerTitle}>{title}</h2>
            <p className={styles.tapMessage}>Tap to learn more</p>
          </div>
        </div>

        {/* Back Side (smaller title + description) */}
        <div className={clsx(styles.flipCardFace, styles.backFace)}>
          <div className={styles.contentWrapper}>
            <h3 className={styles.backTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
