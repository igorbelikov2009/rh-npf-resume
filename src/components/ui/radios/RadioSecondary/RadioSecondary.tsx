import React, { FC, SetStateAction, useState } from "react";
import { RadioItemProps } from "../../../../models/types";
import RadioSecondaryLabel from "../RadioSecondaryLabel/RadioSecondaryLabel";
import styles from "./RadioSecondary.module.scss";

export interface RadioProps {
  radioItems: RadioItemProps[];
  emitValue: (event: React.SetStateAction<string>) => void;
  currentValue: string;
}

const RadioSecondary: FC<RadioProps> = ({ radioItems, emitValue, currentValue }) => {
  const [valueRadio, setValueRadio] = useState<SetStateAction<string>>(currentValue);

  const onChangeRadio = (value: SetStateAction<string>) => {
    setValueRadio(value);
    if (valueRadio) {
      emitValue(value);
    }
  };

  return (
    <div className={styles["radio-secondary"]}>
      {radioItems.map((item) => (
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
