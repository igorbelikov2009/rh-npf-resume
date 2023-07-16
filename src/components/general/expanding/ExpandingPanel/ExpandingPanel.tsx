import React, { FC } from "react";
import DarkIcon from "../../DarkIcon/DarkIcon";
import styles from "./ExpandingPanel.module.scss";

export interface ExpandingPanelProps {
  isContentVisible: boolean;
  panelName: string;
  onClickExpanding: () => void;
}

const ExpandingPanel: FC<ExpandingPanelProps> = ({ isContentVisible, panelName, onClickExpanding }) => {
  return (
    <div className={styles["expanding__row"]} onClick={onClickExpanding}>
      <h2 className={styles["expanding__title"]}>{panelName}</h2>

      <div className={styles["expanding__button"]}>
        <div className={isContentVisible ? styles["expanding__plus-rotate"] : styles["expanding__plus"]}>
          <DarkIcon isDecreased={true} icon="Plus Thin" />
        </div>

        <div className={isContentVisible ? styles["expanding__minus-rotate"] : styles["expanding__minus"]}>
          <DarkIcon isDecreased={true} icon="Minus Thin" />
        </div>
      </div>
    </div>
  );
};

export default ExpandingPanel;
