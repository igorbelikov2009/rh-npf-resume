import React from "react";
import styles from "./TeamController.module.scss";

const TeamController = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Контролер</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Трушкин Николай Константинович</p>
        </div>
      </div>
    </div>
  );
};

export default TeamController;
