import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  checkedValue: boolean;
  toogleChecked: () => void;
  title?: string;
  span?: string;
  subtitle?: string;
}

const Checkbox: FC<CheckboxProps> = ({ checkedValue, toogleChecked, title, span, subtitle }) => {
  const checkboxHandler = () => {
    toogleChecked();
  };

  return (
    <label role="checkbox" aria-checked={true} aria-labelledby="foo" className={styles["checkbox"]}>
      <span className={styles["checkbox__checker"]} />

      <div className={checkedValue ? styles["checkbox__switch_visible"] : styles["checkbox__switch_invisible"]} />

      <input type="checkbox" checked={checkedValue} onChange={checkboxHandler} className={styles["checkbox__input"]} />

      <div className={styles["checkbox__agree"]}>
        <span className={styles["checkbox__agree-title"]}>{title}</span>
        <span className={styles["checkbox__agree-span"]}>{span} </span>
        <span className={styles["checkbox__agree-title"]}>{subtitle}</span>
      </div>
    </label>
  );
};

export default Checkbox;
