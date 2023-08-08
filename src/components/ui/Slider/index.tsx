import React, { FC, useState } from "react";
import styles from "./Slider.module.scss";

export interface ISlider {
  title: string;
  name: string;
  min: string;
  max: string;
  step: string;
  value: string;
  emitValue: (event: string) => void;
}

const SliderString: FC<ISlider> = ({ emitValue, max, min, name, step, title, value }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    emitValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles["slider"]}>
      <div className={styles["slider__description"]}>
        <p className={styles["slider__title"]}> {title}</p>

        <p className={styles["slider__output"]}> {currentValue} </p>
      </div>

      <input
        className={styles["slider-bicolor"]}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handlerSlider}
      />
    </div>
  );
};

export default SliderString;
