import React, { FC } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  checkedValue: boolean;
  toogleChecked: () => void;
  title: string;
  span?: string;
  subtitle?: string;
}

const Checkbox: FC<CheckboxProps> = ({ checkedValue, toogleChecked, title, span, subtitle }) => {
  const checkboxHandler = () => {
    toogleChecked();
  };

  return (
    <label role="checkbox" aria-checked={true} aria-labelledby="foo" className={styles["r-checkbox"]}>
      <span className={styles["r-checkbox__checker"]}></span>

      <div
        className={checkedValue ? styles["r-checkbox__switch_visible"] : styles["r-checkbox__switch_invisible"]}
      ></div>

      <input
        type="checkbox"
        checked={checkedValue}
        onChange={checkboxHandler}
        className={styles["r-checkbox__input"]}
      />

      <div className={styles["r-checkbox__agree"]}>
        <span className={styles["r-checkbox__agree-title"]}>{title}</span>
        <span className={styles["r-checkbox__agree-span"]}>{span} </span>
        <span className={styles["r-checkbox__agree-title"]}>{subtitle}</span>
      </div>
    </label>
  );
};

export default Checkbox;
