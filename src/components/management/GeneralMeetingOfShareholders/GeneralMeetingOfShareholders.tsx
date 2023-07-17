import React from "react";
import styles from "./GeneralMeetingOfShareholders.module.scss";

const GeneralMeetingOfShareholders = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Общее собрание акционеров</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Высшим органом управления Фондом</p>

          <p className={styles["management__man-name"]}>является Общее собрание акционеров</p>

          <p className={styles["management__man-post"]}>Акционерами Фонда являются:</p>

          <p className={styles["management__man-name"]}>АО «НПФ Сбербанка»</p>

          <p className={styles["management__man-name"]}>ООО «Велби Холдинг»</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralMeetingOfShareholders;
