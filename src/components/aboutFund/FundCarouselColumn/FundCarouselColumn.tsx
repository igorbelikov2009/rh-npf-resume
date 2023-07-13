import React, { FC, useEffect, useRef } from "react";
import styles from "./FundCarouselColumn.module.scss";

interface FundCarouselColumnProps {
  isClear: boolean;
  title: string;
  description: string;
  emitWidthColumn: (value: number) => void;
}

const FundCarouselColumn: FC<FundCarouselColumnProps> = ({ isClear, title, description, emitWidthColumn }) => {
  const refColumn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refColumn.current) {
      emitWidthColumn(refColumn.current?.offsetWidth);
    }
  }, [emitWidthColumn]);
  //   console.log(refColumn.current?.offsetWidth);

  return (
    <div className={isClear ? styles.column_clear : styles["column"]} ref={refColumn}>
      <div className={styles["title"]}>{title}</div>

      <div className={styles["line"]}></div>

      <p className={styles["description"]}>{description}</p>
    </div>
  );
};

export default FundCarouselColumn;
