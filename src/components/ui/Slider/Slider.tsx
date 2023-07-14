import React, { FC, useState } from "react";
import styles from "./Slider.module.scss";

export interface SliderProps {
  title: string;
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  emitValue: (event: React.SetStateAction<number>) => void;
}

const Slider: FC<SliderProps> = ({ title, name, min, max, step, value, emitValue }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const sliderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(event.target.value));
    // console.log(Number(event.target.value));
    value = Number(event.target.value);
    emitValue(Number(event.target.value));
  };

  return (
    <div className={styles["slider"]}>
      <div className={styles["slider__description"]}>
        <p className={styles["slider__title"]}>{title}</p>

        <p className={styles["slider__output"]}>{currentValue}</p>
      </div>

      <input
        className={styles["slider-bicolor"]}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={sliderHandler}
      />
    </div>
  );
};

export default Slider;
