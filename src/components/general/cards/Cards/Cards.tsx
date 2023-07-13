import React, { FC } from "react";
import { ICard } from "../../../../models/types";
import CardsCard from "../CardsCard/CardsCard";
import styles from "./Cards.module.scss";

interface CardsProps {
  cards: ICard[];
}

const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <section className={styles["cards"]}>
      <h2 className={styles["cards__heading"]}>Фонд в цифрах</h2>

      <div className={styles["cards__cards"]}>
        {cards.map((card) => (
          <CardsCard key={card.icon} icon={card.icon} span={card.span} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
