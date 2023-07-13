import React, { FC } from "react";
import { DarkIconProps } from "../../../models/types";
import styles from "./DarkIcon.module.scss";

const DarkIcon: FC<DarkIconProps> = ({ icon, isDecreased }) => {
  if (isDecreased) {
    return <img src={`/icons/triple/${icon}/Dark.svg`} alt="icon" className={styles["dark-icon__decreased"]} />;
  }

  return <img src={`/icons/triple/${icon}/Dark.svg`} alt="icon" className={styles["dark-icon"]} />;
};

export default DarkIcon;
