import React, { FC } from "react";
import styles from "./RadioCircleItem.module.scss";

interface RadioCircleItemProps {
  value: string;
  title: string;
  isActive: boolean;
  emitValue: (event: string) => void;
}

const RadioCircleItem: FC<RadioCircleItemProps> = ({ value, title, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["radio-item_chosen"] : styles["radio-item"]}>
      <input className={styles["field"]} type="radio" name="content" value={value} onChange={radioHandler} />
      <p className={isActive ? styles["title_chosen"] : styles["title"]}>{title}</p>
    </label>
  );
};

export default RadioCircleItem;
