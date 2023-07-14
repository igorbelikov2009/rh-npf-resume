import React, { FC } from "react";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button className={styles["primary-button"]} disabled={disabled}>
      {children}
    </button>
  );
};

export default PrimaryButton;
