import React, { FC } from "react";
import styles from "./CardsCard.module.scss";
import DarkIcon from "../../DarkIcon/DarkIcon";
import { ICard } from "../../../../models/types";

const CardsCard: FC<ICard> = ({ icon, title, span, subtitle }) => {
  return (
    <div className={styles["cards-card"]}>
      <div className={styles["cards-card__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["cards-card__title"]}>
          {title}
          <span className={styles["cards-card__span"]}> {span} </span>
        </p>

        <p className={styles["cards-card__subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardsCard;
