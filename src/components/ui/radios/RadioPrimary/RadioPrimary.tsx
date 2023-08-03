import React, { FC, useState } from "react";
import { RadioProps } from "../../../../models/types";
import RadioPrimaryLabel from "../RadioPrimaryLabel/RadioPrimaryLabel";
import styles from "./RadioPrimary.module.scss";

const RadioPrimary: FC<RadioProps> = ({ optionsItems, currentValue, emitValue }) => {
  const [valueRadio, setValueRadio] = useState(currentValue);

  const onChangeRadio = (value: string) => {
    setValueRadio(value);
    emitValue(value);
  };

  return (
    <div className={styles["radio-primary"]}>
      <div className={styles["radio-primary__flex-container"]}>
        {optionsItems.map((item) => (
          <RadioPrimaryLabel
            key={item.value}
            title={item.title}
            value={item.value}
            name={item.name}
            isActive={item.value === valueRadio}
            emitValue={onChangeRadio}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioPrimary;
