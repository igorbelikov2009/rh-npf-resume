import React, { FC } from "react";
import styles from "./InputTitle.module.scss";

interface InputTitleProps {
  title: string;
  //   isActive: boolean; - путаница
  isDormancy: boolean; // состояние покоя
}

const InputTitle: FC<InputTitleProps> = ({ title, isDormancy }) => {
  return (
    <div>
      <p className={isDormancy ? styles["my-input__title"] : styles["my-input__title-top"]}>{title}</p>

      <p className={isDormancy ? styles["my-input__title-else-none"] : styles["my-input__title-else-visible"]}>
        {title}
      </p>
    </div>
  );
};

export default InputTitle;
