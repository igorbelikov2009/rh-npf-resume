import React, { FC, useEffect } from "react";
import { ICarouselCard } from "../../../../models/types";
import { cardsBusinessCarouselAPI } from "../../../../store/services/getCardsBusinessCarouselAPI";
import CarouselCard from "../CarouselCard/CarouselCard";
import styles from "./BusinessCarousel.module.scss";

interface BusinessCarouselProps {
  currentValue: number;
  emitAmountChildren: (value: number) => void;
  emitValue: (value: string) => void;
}

const BusinessCarousel: FC<BusinessCarouselProps> = ({ currentValue, emitAmountChildren, emitValue }) => {
  const { data } = cardsBusinessCarouselAPI.useGetCardsBusinessCarouselQuery();
  let cardsBusinessCarousel: ICarouselCard[] = [];
  if (data) {
    cardsBusinessCarousel = data;
  }

  useEffect(() => {
    emitAmountChildren(cardsBusinessCarousel.length);
  }, [cardsBusinessCarousel.length, emitAmountChildren]);

  const onChangeCarouselRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["carousel__container"]}>
      {cardsBusinessCarousel.map((card, index) => (
        <CarouselCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
          emitValue={onChangeCarouselRadio}
          isActive={index === currentValue}
        />
      ))}
    </div>
  );
};

export default BusinessCarousel;
