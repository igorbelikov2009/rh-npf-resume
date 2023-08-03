import React, { FC } from "react";
import { RadioLabelProps } from "../../../../models/types";
import styles from "./RadioSecondaryLabel.module.scss";

const RadioSecondaryLabel: FC<RadioLabelProps> = ({ value, title, name, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["item__active"] : styles["item"]}>
      <input className={styles["item__field"]} type="radio" value={value} name={name} onChange={radioHandler} />

      <p className={styles["item__title"]}>{title}</p>
    </label>
  );
};

export default RadioSecondaryLabel;
