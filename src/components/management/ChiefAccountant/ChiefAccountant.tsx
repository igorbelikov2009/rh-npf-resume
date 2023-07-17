import React from "react";
import styles from "./ChiefAccountant.module.scss";

const ChiefAccountant = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Главный бухгалтер</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Васюнина Анна Александровна</p>
        </div>
      </div>
    </div>
  );
};

export default ChiefAccountant;
