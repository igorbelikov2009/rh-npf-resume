import React, { FC } from "react";
import styles from "./AdaptiveRadioItem.module.scss";

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  isActive: boolean;
  // emitValue: (event: string, id: string) => void;
  emitValue: (event: any, id: string) => void; // оставить так
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ value, id, title, isActive, emitValue }) => {
  const radioHandler = (event: any) => {
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["radio-item-active"] : styles["radio-item"]}>
      {title}
      <input className={styles["input"]} type="radio" value={value} id={id} onClick={radioHandler} />
    </label>
  );
};

export default AdaptiveRadioItem;

// Только  onClick={radioHandler}, onChange работает только на одно нажатие.
