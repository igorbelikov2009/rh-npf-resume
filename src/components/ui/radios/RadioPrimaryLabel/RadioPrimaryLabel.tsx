import React, { FC, useState } from "react";
import styles from "./RadioPrimaryLabel.module.scss";

interface RadioPrimaryLabelProps {
  value: string;
  title: string;
  name: string;
  isActive: boolean;
  emitValue: (event: React.SetStateAction<string>) => void;
}

const RadioPrimaryLabel: FC<RadioPrimaryLabelProps> = ({ value, title, name, isActive, emitValue }) => {
  const [, setValueRadio] = useState<string>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio(event.target.value);
    emitValue(event.target.value);
  };

  return (
    <label className={isActive ? styles["radio-primary-label_active"] : styles["radio-primary-label"]}>
      <input
        className={styles["radio-primary-label__field"]}
        type="radio"
        name={name}
        value={value}
        onChange={radioHandler}
      />
      <p className={styles["radio-primary-label__title"]}>{title}</p>
    </label>
  );
};

export default RadioPrimaryLabel;
