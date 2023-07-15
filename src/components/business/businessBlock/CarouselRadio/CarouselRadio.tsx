import React, { FC } from "react";
import styles from "./CarouselRadio.module.scss";

interface CarouselRadioProps {
  value: string;
  emitValue: (event: string) => void;
}

const CarouselRadio: FC<CarouselRadioProps> = ({ value, emitValue }) => {
  const onChangeCarouselRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <>
      <input
        type="radio"
        name="card"
        value={value}
        onChange={onChangeCarouselRadio}
        className={styles["carousel__radio"]}
      />
    </>
  );
};

export default CarouselRadio;
