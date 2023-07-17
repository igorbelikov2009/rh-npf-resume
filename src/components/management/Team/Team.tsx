import React from "react";
import styles from "./Team.module.scss";

const Team = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Команда</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Перевязкина Анна</p>

          <p className={styles["management__man-post"]}>Управляющий директор</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Кондратюк Яков</p>

          <p className={styles["management__man-post"]}>Руководитель казначейства</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Королёва Наталия</p>

          <p className={styles["management__man-post"]}>
            Директор Департамента сопровождения договоров негосударственного пенсионного обеспечения
          </p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Тимофеев Александр</p>

          <p className={styles["management__man-post"]}>Начальник юридического управления</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Матвеева Евгения</p>

          <p className={styles["management__man-post"]}>Руководитель операционного отдела</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Симоненко Анастасия</p>

          <p className={styles["management__man-post"]}>Руководитель клиентской службы</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Абдрашитов Евгений</p>

          <p className={styles["management__man-post"]}>Руководитель службы риск-менеджмента</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
