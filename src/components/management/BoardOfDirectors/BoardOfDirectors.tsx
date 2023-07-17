import React from "react";
import styles from "./BoardOfDirectors.module.scss";

const BoardOfDirectors = () => {
  return (
    <div>
      <h2 className={styles["management__department-title"]}>Совет директоров</h2>

      <div className={styles["management__list"]}>
        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Артемьев Сергей Александрович</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО «Группа Ренессанс Страхование»</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Дегтеронак Дмитрий Адамович</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО «Группа Ренессанс Страхование»</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Королева Елена Викторовна</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО НПФ «Ренессанс пенсии»</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Тарасов Владимир Валерьевич</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО «Группа Ренессанс Страхование»</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Рябцов Сергей Львович</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО «Группа Ренессанс Страхование»</p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Компиш Марина Валерьевна</p>

          <p className={styles["management__man-post"]}>
            Основное место работы: Представительство Компании с ограниченной ответственностью "Спутник Инвестмент
            Лимитед" (Республика Кипр) в г. Москве
          </p>
        </div>

        <div className={styles["management__offis-man"]}>
          <p className={styles["management__man-name"]}>Куранов Михаил Сергеевич</p>

          <p className={styles["management__man-post"]}>Основное место работы: АО «Группа Ренессанс Страхование»</p>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
