import React, { FC } from "react";
import styles from "./AdaptiveRadioItem.module.scss";

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  isActive: boolean;
  emitValue: (event: string, id: string) => void;
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ value, id, title, isActive, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["radio-item-active"] : styles["radio-item"]}>
      {title}
      <input className={styles["radio-item__input"]} type="radio" value={value} id={id} onChange={radioHandler} />
    </label>
  );
};

export default AdaptiveRadioItem;
