import React, { FC, useState } from "react";
import { RadioItemProps } from "../../../../models/types";
import RadioPrimaryLabel from "../RadioPrimaryLabel/RadioPrimaryLabel";
import styles from "./RadioPrimary.module.scss";

interface RadioPrimaryProps {
  optionsItems: RadioItemProps[];
  emitValue: (event: React.SetStateAction<string>) => void;
  currentValue: string;
}

const RadioPrimary: FC<RadioPrimaryProps> = ({ optionsItems, currentValue, emitValue }) => {
  const [valueRadio, setValueRadio] = useState(currentValue);

  const onChangeRadio = (value: React.SetStateAction<string>) => {
    setValueRadio(value);
    if (valueRadio) {
      emitValue(value);
    }
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
