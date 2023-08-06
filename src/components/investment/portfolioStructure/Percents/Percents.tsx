import React, { FC } from "react";
import styles from "./Percents.module.scss";

interface PercentProps {
  percent01: string;
  percent02: string;
  percent03: string;
  percent04: string;
  percent05: string;
  percent06: string;
  isVisible?: boolean;
}

const Percents: FC<PercentProps> = ({
  percent01,
  percent02,
  percent03,
  percent04,
  percent05,
  percent06,
  isVisible,
}) => {
  return (
    <>
      {isVisible && (
        <div className={styles["percents-container"]}>
          <div className={styles["percents"]}>
            <div className={styles["percent-block"]}>
              <p className={styles["percent-01"]}>{percent01}</p>
              <p className={styles["title"]}>Облигации федерального займа</p>
            </div>

            <div className={styles["percent-block"]}>
              <p className={styles["percent-02"]}>{percent02}</p>
              <p className={styles["title"]}>Облигации хозяйствующих обществ</p>
            </div>

            <div className={styles["percent-block"]}>
              <p className={styles["percent-03"]}>{percent03}</p>
              <p className={styles["title"]}>Акции</p>
            </div>

            <div className={styles["percent-block"]}>
              <p className={styles["percent-04"]}>{percent04}</p>
              <p className={styles["title"]}>Субфедеральные и муниципальные облигации</p>
            </div>

            <div className={styles["percent-block"]}>
              <p className={styles["percent-05"]}>{percent05}</p>
              <p className={styles["title"]}>Депозиты / денежные средства на расчетных счетах</p>
            </div>

            <div className={styles["percent-block"]}>
              <p className={styles["percent-06"]}>{percent06}</p>
              <p className={styles["title"]}>Открытые паевые инвестиционные фонды</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Percents;
