import React, { FC } from "react";
import { ICard } from "../../../../models/types";
import DarkIcon from "../../DarkIcon/DarkIcon";
import styles from "./CardsItem.module.scss";

const CardsItem: FC<ICard> = ({ icon, title, subtitle, span }) => {
  return (
    <div className={styles["cards-item"]}>
      <div className={styles["cards-item__icon"]}>
        <DarkIcon icon={icon} />
      </div>

      <div>
        <p className={styles["cards-item__title"]}>
          {title}
          <span className={styles["cards-item__span"]}> {span} </span>
        </p>

        <p className={styles["cards-item__subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardsItem;
