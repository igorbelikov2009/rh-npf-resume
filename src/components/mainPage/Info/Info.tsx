import React from "react";
import styles from "./Info.module.scss";
import imageGirl from "../../../assets/images/main/girl.jpg";
import imageBuilding from "../../../assets/images/main/building.jpg";
import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";

const Info = () => {
  return (
    <div className={styles["info"]}>
      <div className={styles["info__head"]}>
        <h1 className={styles["info__heading"]}>
          Ренессанс пенсии входит в число десяти крупнейших негосударственных пенсионных фондов России
        </h1>

        <p className={styles["info__subheading"]}>
          По состоянию на 31 марта 2019 фонд ведет более 150 корпоративных пенсионных планов, объем резервов которых
          превышает 18 млрд. рублей.
        </p>
      </div>

      <div className={styles["info__content"]}>
        <div className={styles["info__block"]}>
          <img src={imageGirl} alt="girl" className={styles["info__image"]} />

          <div className={styles["info__offer"]}>
            <h1 className={styles["info__title"]}>Для себя</h1>

            <p className={styles["info__subtitle"]}>
              Сохраните уровень дохода после окончания карьеры — оформите индивидуальный пенсионный план и формируйте
              собственную пенсию.
            </p>

            <div className={styles["info__button-container"]}>
              <PrimaryButton children="Хочу знать больше" />
            </div>
          </div>
        </div>

        <div className={styles["info__block"]}>
          <img src={imageBuilding} alt="Building" className={styles["info__image"]} />

          <div className={styles["info__offer"]}>
            <h1 className={styles["info__title"]}>Для бизнеса</h1>

            <p className={styles["info__subtitle"]}>
              Корпоративные пенсионные программы дополнят соц пакет сотрудников и станут долгосрочным инструментом
              мотивации персонала.
            </p>

            <div className={styles["info__button-container"]}>
              <PrimaryButton children="Отправить заявку" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
