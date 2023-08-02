import React, { FC } from "react";
import styles from "./PensionInfo.module.scss";

interface PensionInfoProps {
  pensionValue: number;
  generalAccumValue: number;
}

const PensionInfo: FC<PensionInfoProps> = ({ pensionValue, generalAccumValue }) => {
  return (
    <div className={styles["pension-info"]}>
      <div className={styles["pension-info__container"]}>
        <div className={styles["pension-info__in-future"]}>
          <div className={styles["pension-info__in-future-container"]}>
            <p className={styles["pension-info__pension"]}>{pensionValue} ₽.</p>

            <p className={styles["pension-info__title"]}>
              Пенсия
              <span className={styles["pension-info__span"]}> в будущем</span>
            </p>
          </div>
        </div>

        <div className={styles["pension-info__storage"]}>
          <div className={styles["pension-info__calculation"]}>
            <p className={styles["pension-info__sum"]}>{generalAccumValue} ₽.</p>

            <p className={styles["pension-info__title"]}>Накоплено</p>
          </div>

          <div className={styles["pension-info__calculation"]}>
            <div className={styles["pension-info__calculation-container"]}>
              <p className={styles["pension-info__social"]}>273 000 ₽.</p>

              <p className={styles["pension-info__title"]}>Размер соц. вычета</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensionInfo;
