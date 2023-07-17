import React, { FC } from "react";
import styles from "./AdaptiveRadioItem.module.scss";

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  name?: string;
  isActive: boolean;
  emitValue: (event: any, id: string) => void;
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ value, id, title, name, isActive, emitValue }) => {
  const radioHandler = (event: any) => {
    emitValue(event.target.value, id);
  };

  return (
    <label className={isActive ? styles["adaptive-radio-item_active"] : styles["adaptive-radio-item"]}>
      {title}
      <input
        className={styles["adaptive-radio-item__input"]}
        type="radio"
        name={name}
        value={value}
        id={id}
        onClick={radioHandler}
      />
    </label>
  );
};

export default AdaptiveRadioItem;
