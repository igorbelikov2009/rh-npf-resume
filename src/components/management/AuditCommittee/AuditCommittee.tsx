import React from "react";
import styles from "./AuditCommittee.module.scss";

const AuditCommittee = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Ревизионная комиссия</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Васюнина Анна Александровна</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Абдрашитов Евгений Александрович</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Игумнова Наталья Викторовна</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Кондратюк Яков Сергеевич</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Королёва Наталия Геннадьевна</p>
        </div>
      </div>
    </div>
  );
};

export default AuditCommittee;
