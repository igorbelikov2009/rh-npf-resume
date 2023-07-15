import React, { FC } from "react";
import styles from "./ChangingTitles.module.scss";

interface ChangingTitlesProps {
  isActive: boolean;
  title: string;
}

const ChangingTitles: FC<ChangingTitlesProps> = ({ isActive, title }) => {
  return <div>{isActive && <h2 className={styles.heading}> {title} </h2>}</div>;
};

export default ChangingTitles;
