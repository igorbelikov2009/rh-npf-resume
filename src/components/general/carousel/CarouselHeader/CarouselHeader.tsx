import React, { FC } from "react";
import Arrows from "../Arrow/Arrows";
import styles from "./CarouselHeader.module.scss";

export interface CarouselHeaderProps {
  headerTitle?: string;
  headerSubtitle?: string;
  isHoveredLeft: boolean;
  isBlurredLeft: boolean;
  isHoveredRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const CarouselHeader: FC<CarouselHeaderProps> = ({
  headerTitle,
  headerSubtitle,
  isBlurredLeft,
  isBlurredRight,
  isHoveredLeft,
  isHoveredRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <section className={styles["carousel-header"]}>
      <div className={styles["carousel-header__headings"]}>
        {headerTitle && <h1 className={styles["carousel-header__title"]}>{headerTitle}</h1>}
        {headerSubtitle && <p className={styles["carousel-header__subtitle"]}>{headerSubtitle}</p>}

        <Arrows
          isBlurredLeft={isBlurredLeft}
          isBlurredRight={isBlurredRight}
          isHoveredLeft={isHoveredLeft}
          isHoveredRight={isHoveredRight}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </section>
  );
};

export default CarouselHeader;
