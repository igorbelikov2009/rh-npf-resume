import React, { FC } from "react";
import { RadioLabelProps } from "../../../../models/types";
import styles from "./RadioPrimaryLabel.module.scss";

const RadioPrimaryLabel: FC<RadioLabelProps> = ({ value, title, name, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["item-active"] : styles["item"]}>
      <input className={styles["item__field"]} type="radio" name={name} value={value} onChange={radioHandler} />
      <p className={styles["item__title"]}>{title}</p>
    </label>
  );
};

export default RadioPrimaryLabel;
