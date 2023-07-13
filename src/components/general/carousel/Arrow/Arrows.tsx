import React, { FC } from "react";
import styles from "./Arrows.module.scss";

export interface ArrowsProps {
  isHoveredLeft: boolean;
  isBlurredLeft: boolean;
  isHoveredRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Arrows: FC<ArrowsProps> = ({
  isHoveredLeft,
  isBlurredLeft,
  isHoveredRight,
  isBlurredRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={styles["arrows"]}>
      <div
        className={isHoveredLeft ? styles["left-arrow__cursor-pointer"] : styles["left-arrow__cursor-default"]}
        onClick={onClickLeft}
      >
        <img className={styles["left-image"]} src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredLeft ? styles["left-image_opacity-04"] : styles["left-image_opacity-1"]}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>

      <div
        className={isHoveredRight ? styles["right-arrow__cursor-pointer"] : styles["right-arrow__cursor-default"]}
        onClick={onClickRight}
      >
        <img className={styles["right-image"]} src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredRight ? styles["right-image_opacity-04"] : styles["right-image_opacity-1"]}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Arrows;
