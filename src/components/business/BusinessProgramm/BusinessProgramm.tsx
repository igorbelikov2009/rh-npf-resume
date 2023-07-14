import React from "react";
import { businessCards } from "../../../data/dist/BusinesCards";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./BusinessProgramm.module.scss";

const BusinessProgramm = () => {
  return (
    <section className={styles["business-programm"]}>
      <div className={styles["business-programm__container"]}>
        <div className={styles["business-programm__header"]}>
          <h1 className={styles["business-programm__heading"]}>Как работает корпоративная пенсионная программа</h1>
        </div>

        <div className={styles["business-programm__block"]}>
          {businessCards &&
            businessCards.map((card, index) => (
              <div key={index} className={styles["card"]}>
                <div className={styles["card__top-block"]}>
                  <div className={styles["card__icon"]}>
                    <DarkIcon icon={card.icon} />
                  </div>

                  <h2 className={styles["card__header"]}>{card.header}</h2>
                </div>

                <div className={styles["card__titles"]}>
                  {card.titles.map((title, index) => (
                    <p key={index} className={styles["card__title"]}>
                      {title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProgramm;
