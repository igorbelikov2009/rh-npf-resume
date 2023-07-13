import React, { FC } from "react";
import { IColumn } from "../../../models/types";
import FundCarouselColumn from "../FundCarouselColumn/FundCarouselColumn";
import styles from "./FundCarousel.module.scss";

interface FundCarouselProps {
  qq: number;
  jj: number;
  columns: IColumn[] | undefined;
  emitWidthColumn: (value: number) => void;
}

const FundCarousel: FC<FundCarouselProps> = ({ jj, qq, columns, emitWidthColumn }) => {
  const getWidthColumn = (widthColumn: number) => {
    emitWidthColumn(widthColumn);
  };

  return (
    <div className={styles["fund-carousel"]}>
      {columns &&
        columns.map((column, index) => (
          <FundCarouselColumn
            key={index}
            description={column.description}
            title={column.title}
            isClear={index === qq || jj === index}
            emitWidthColumn={getWidthColumn}
          />
        ))}
    </div>
  );
};

export default FundCarousel;
