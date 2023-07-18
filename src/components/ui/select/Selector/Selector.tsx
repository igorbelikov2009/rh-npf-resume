import React, { FC } from "react";
import styles from "./Selector.module.scss";

export interface SelectorProps {
  value: string;
  ifPressed: boolean;
  onClickSelector: () => void;
}

const Selector: FC<SelectorProps> = ({ value, ifPressed, onClickSelector }) => {
  return (
    <div className={styles["select-controller"]}>
      <div className={styles["changing-title"]}>
        <div className={ifPressed ? styles["border-gray"] : styles["border-white"]}>
          <div
            className={ifPressed ? styles["container-backgr-gray"] : styles["container-backgr-white"]}
            onClick={onClickSelector}
          >
            <div className={styles["controller-date"]}>
              <div>
                <p className={styles["select-controller-date"]}>{value}</p>
              </div>
            </div>

            <div className={styles.icon}>
              <img
                className={ifPressed ? styles["image-rotate-180"] : styles["image-rotate-0"]}
                src="/icons/triple/Arrow Down/Dark.svg"
                alt="Arrow"
              />
            </div>
          </div>

          <div className={ifPressed ? styles["white-line-height-2"] : styles["white-line-height-1"]}>
            <div className={ifPressed ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>

            <div className={ifPressed ? styles["black-line-width-0"] : styles["black-line-width-50"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
