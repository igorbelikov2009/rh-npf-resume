import React, { FC } from "react";
import styles from "./BooleanSwitchItem.module.scss";

interface BooleanSwitchItemProps {
  value: string;
  title: string;
  name: string;
  isActive: boolean;
  emitValue: (event: React.SetStateAction<string>) => void;
}

const BooleanSwitchItem: FC<BooleanSwitchItemProps> = ({ value, title, name, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["boolean-switch_active"] : styles["boolean-switch"]}>
      <input
        className={styles["boolean-switch__field"]}
        type="radio"
        name={name}
        value={value}
        onChange={radioHandler}
      />
      <p className={styles["boolean-switch__title"]}>{title}</p>
    </label>
  );
};

export default BooleanSwitchItem;
