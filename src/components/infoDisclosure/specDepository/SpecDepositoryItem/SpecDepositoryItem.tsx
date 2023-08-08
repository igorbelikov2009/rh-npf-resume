import React, { FC } from "react";
import styles from "./SpecDepositoryItem.module.scss";

export interface SpecDepositoryItemProps {
  subheading: string;
  title: string;
  subtitle: string;
}

const SpecDepositoryItem: FC<SpecDepositoryItemProps> = ({ subheading, title, subtitle }) => {
  return (
    <>
      <p className={styles["spec-depository__paragraph"]}>
        <span className={styles["spec-depository__subheading"]}> {subheading} </span>
        <span className={styles["spec-depository__title"]}> {title} </span>
      </p>

      <p className={styles["spec-depository__paragraph"]}>
        <span className={styles["spec-depository__title"]}> {subtitle} </span>
      </p>
    </>
  );
};

export default SpecDepositoryItem;
