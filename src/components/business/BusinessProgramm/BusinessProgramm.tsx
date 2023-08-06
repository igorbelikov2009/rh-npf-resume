import React from "react";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import styles from "./BusinessProgramm.module.scss";
import { IBusinessCard } from "../../../models/types";
import { businessCardsAPI } from "../../../store/services/businessCardsAPI";
import ServerIsLoading from "../../general/ServerIsLoading/ServerIsLoading";
import ServerError from "../../general/ServerError/ServerError";

const BusinessProgramm = () => {
  const { data, isLoading, isError } = businessCardsAPI.useGetBusinessCardsAPIQuery();

  let businessCards: IBusinessCard[] = [];
  if (data) {
    businessCards = data;
  }

  return (
    <section className={styles["business-programm"]}>
      <div className={styles["business-programm__container"]}>
        <div className={styles["business-programm__header"]}>
          <h1 className={styles["business-programm__heading"]}>Как работает корпоративная пенсионная программа</h1>
        </div>

        <div className={styles["business-programm__programm-block"]}>
          {isLoading && <ServerIsLoading />}
          {isError && <ServerError />}

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
