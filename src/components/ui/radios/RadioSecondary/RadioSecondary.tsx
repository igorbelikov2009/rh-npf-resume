import React, { FC, useState } from "react";
import { RadioProps } from "../../../../models/types";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

const RadioSecondary: FC<RadioProps> = ({ optionsItems, emitValue, currentValue }) => {
  const [valueRadio, setValueRadio] = useState<string>(currentValue);

  const onChangeRadio = (value: string) => {
    setValueRadio(value);
    emitValue(value);
  };

  return (
    <div className={styles["radio-secondary"]}>
      {optionsItems.map((item) => (
        <RadioSecondaryLabel
          key={item.value}
          title={item.title}
          value={item.value}
          name={item.name}
          isActive={item.value === valueRadio}
          emitValue={onChangeRadio}
        />
      ))}
    </div>
  );
};

export default RadioSecondary;
