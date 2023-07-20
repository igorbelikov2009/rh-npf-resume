import React, { FC } from "react";
import { IIndicatorRow } from "../../../../models/types";
import styles from "./IndicatorRow.module.scss";

const IndicatorRow: FC<IIndicatorRow> = ({ title, index }) => {
  return (
    <div className={styles["indicator-row"]}>
      <p className={styles["indicator-row__title"]}>{title}</p>

      <p className={styles["indicator-row__index"]}>{index}</p>
    </div>
  );
};

export default IndicatorRow;
