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
        <div className={styles["pension-info__v-budushchem"]}>
          <div className={styles["pension-info__v-budushchem_wrapper"]}>
            <p className={styles["pension-info__output-pension"]}>{pensionValue} ₽.</p>

            <p className={styles["pension-info__description"]}>
              Пенсия
              <span className={styles["pension-info__description_span"]}> в будущем</span>
            </p>
          </div>
        </div>

        <div className={styles["pension-info__box"]}>
          <div className={styles["pension-info__calculation"]}>
            <p className={styles["pension-info__output-sum-nakoplen"]}>{generalAccumValue} ₽.</p>

            <p className={styles["pension-info__description"]}>Накоплено</p>
          </div>

          <div className={styles["pension-info__calculation"]}>
            <div className={styles["pension-info__calculation_wrapper"]}>
              <p className={styles["pension-info__output-social"]}>273 000 ₽.</p>

              <p className={styles["pension-info__description"]}>Размер соц. вычета</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensionInfo;
