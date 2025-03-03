import React, { useState } from "react";
import styles from "./FlipCard.module.css";
import clsx from "clsx";

const FlipCard = ({
  title,
  subtitle = "",
  description,
  buttonText,
  onButtonClick,
  frontImage = null,
  backImage = null,
  imageAlt = "Image",
  customStyles = {},  // Optional: allows passing outer styles like margin
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
        {/* Front Side */}
        <div className={clsx(styles.flipCardFace, styles.frontFace)}>
          {frontImage && (
            <div className={styles.imageWrapper}>
              <img src={frontImage} alt={imageAlt} className={styles.image} />
            </div>
          )}

          <div className={styles.contentWrapper}>
            {subtitle && (
              <div className={styles.subtitleRow}>
                <div className={styles.leftColumn}>
                  <p className={styles.containerSubtitle}>{subtitle}</p>
                </div>
                <div className={styles.rightColumn}></div>
              </div>
            )}

            <div className={styles.row}>
              <div className={styles.leftColumn}>
                <h2 className={styles.containerTitle}>{title}</h2>
              </div>
              <div className={styles.rightColumn}>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={clsx(styles.flipCardFace, styles.backFace)}>
          {backImage && (
            <div className={styles.imageWrapper}>
              <img src={backImage} alt={imageAlt} className={styles.image} />
            </div>
          )}

          <div className={styles.contentWrapper}>
            <div className={styles.row}>
              <div className={styles.leftColumn}>
                <h2 className={styles.containerTitle}>{title}</h2>
              </div>
              <div className={styles.rightColumn}>
                <p className={styles.description}>Want to know more?</p>
                <button
                  className={styles.button}
                  onClick={(e) => {
                    e.stopPropagation();  // Prevent flip on button click
                    onButtonClick();
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
