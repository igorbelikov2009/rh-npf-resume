import React, { FC } from "react";
import { INewsLink } from "../../../../models/types";
import NewsLinkContainer from "../NewsLinkContainer/NewsLinkContainer";
import styles from "./MainCarousel.module.scss";

interface MainCarouselProps {
  qq: number;
  jj: number;
  carouselLinks: INewsLink[];
  emitWidthColumn: (value: React.SetStateAction<number>) => void;
}

const MainCarousel: FC<MainCarouselProps> = ({ jj, qq, carouselLinks, emitWidthColumn }) => {
  const getWidthColumn = (width: React.SetStateAction<number>) => {
    emitWidthColumn(width);
  };

  return (
    <div className={styles["carousel-tape"]}>
      {carouselLinks &&
        carouselLinks.map((link, index) => (
          <NewsLinkContainer
            key={index}
            isClear={index === qq || jj === index}
            link={link}
            emitWidthColumn={getWidthColumn}
          />
        ))}
    </div>
  );
};

export default MainCarousel;
