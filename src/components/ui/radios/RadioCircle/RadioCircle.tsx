import React, { FC } from "react";
import { RadioProps } from "../../../../models/types";
import RadioCircleItem from "../RadioCircleItem/RadioCircleItem";
import styles from "./RadioCircle.module.scss";

const RadioCircle: FC<RadioProps> = ({ optionsItems, currentValue, emitValue }) => {
  const onChangeRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["radio-circle"]}>
      <div className={styles["radio-circle__items-container"]}>
        {optionsItems.map((item) => (
          <RadioCircleItem
            key={item.value}
            value={item.value}
            title={item.title}
            emitValue={onChangeRadio}
            isActive={item.value === currentValue}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioCircle;
