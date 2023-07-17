import React, { FC } from "react";
import { ISwitchItem } from "../../../../models/types";
import BooleanSwitchItem from "../BooleanSwitchItem/BooleanSwitchItem";
import styles from "./BooleanSwitch.module.scss";

interface BooleanSwitchProps {
  switchItems: ISwitchItem[];
  emitValue: (event: React.SetStateAction<string>) => void;
  currentValue: string;
}

const BooleanSwitch: FC<BooleanSwitchProps> = ({ switchItems, emitValue, currentValue }) => {
  const onChangeRadio = (value: React.SetStateAction<string>) => {
    emitValue(value);
  };

  return (
    <div className={styles["boolean-switch"]}>
      <div className={styles["boolean-switch__flex-container"]}>
        {switchItems.map((item) => (
          <BooleanSwitchItem
            key={item.value}
            title={item.title}
            value={item.value}
            name={item.name}
            isActive={item.value === currentValue}
            emitValue={onChangeRadio}
          />
        ))}
      </div>
    </div>
  );
};

export default BooleanSwitch;
