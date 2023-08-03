import React, { FC } from "react";
import { RadioLabelProps } from "../../../../models/types";
import styles from "./RadioCircleItem.module.scss";

const RadioCircleItem: FC<RadioLabelProps> = ({ value, title, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["radio-item_acive"] : styles["radio-item"]}>
      <input className={styles["field"]} type="radio" name="content" value={value} onChange={radioHandler} />
      <p className={isActive ? styles["title-active"] : styles["title"]}>{title}</p>
    </label>
  );
};

export default RadioCircleItem;
