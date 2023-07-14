import React from "react";
import styles from "./ImagesCalculator.module.scss";

const ImagesCalculator = () => {
  return (
    <section className={styles["calculator-image"]}>
      <div className={styles["calculator-image__container"]}>
        <div className={styles["calculator-image__bloc-images"]}>
          <img className={styles["calculator-image__image"]} src="/images/main/manBackground.jpg" alt="manBackground" />

          <img className={styles["calculator-image__image"]} src="/images/main/man.png" alt="man" />

          <img className={styles["calculator-image__image"]} src="/images/main/businessWork.jpg" alt="businessWork" />

          <div className={styles["calculator-image__attention"]}>
            <img className={styles["calculator-image__icon"]} src="/icons/attention.svg" alt="attention" />
            <p className={styles["calculator-image__description"]}>
              Калькулятор позволяет произвести ориентировочный расчет будущей пенсии. Не является офертой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesCalculator;
