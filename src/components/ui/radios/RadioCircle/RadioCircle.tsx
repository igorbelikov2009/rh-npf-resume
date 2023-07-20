import React, { FC } from "react";
import { IRadioCircleItem } from "../../../../models/types";
import RadioCircleItem from "../RadioCircleItem/RadioCircleItem";
import styles from "./RadioCircle.module.scss";

interface RadioCircleProps {
  radioItems: IRadioCircleItem[];
  currentValue: string;
  emitValue: (value: string) => void;
}

const RadioCircle: FC<RadioCircleProps> = ({ radioItems, currentValue, emitValue }) => {
  const onChangeRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <div className={styles["radio-circle"]}>
      <div className={styles["radio-circle__items-container"]}>
        {radioItems.map((item) => (
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
