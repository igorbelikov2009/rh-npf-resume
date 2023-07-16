import React from "react";
import { cardsBusinnesStatistic } from "../../../data/businessPageData";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./BusinnesStatistic.module.scss";

const BusinnesStatistic = () => {
  return (
    <section className={styles["businnes-statistic"]}>
      <h2 className={styles["businnes-statistic__heading"]}>
        Для заключения договора негосударственного пенсионного обеспечения вы можете обратиться в офис Фонда. Договор
        будет оформлен на основании пенсионных правил Фонда по пенсионной Схеме 1, с именными пенсионными счетами или
        Схеме 2. С солидарным пенсионным счетом.
      </h2>

      <h2 className={styles["businnes-statistic__subheading"]}>Преимущества Фонда</h2>

      <div className={styles["businnes-statistic__container"]}>
        {cardsBusinnesStatistic.map((card, index) => (
          <div key={index} className={styles["businnes-statistic__card"]}>
            <div className={styles["businnes-statistic__icon"]}>
              <DarkIcon icon={card.icon} />
            </div>

            <p className={styles["businnes-statistic__title"]}>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinnesStatistic;
