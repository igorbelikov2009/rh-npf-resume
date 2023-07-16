/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Address.module.scss";

const Address = () => {
  return (
    <section className={styles["contacts"]}>
      <div className={styles["contacts__container"]}>
        <div className={styles["contacts__row"]}>
          <div className={styles["contacts__column"]}>
            <h2 className={styles["contacts__contacts"]}>Контакты</h2>

            <p className={styles["contacts__title"]}>Телефон</p>

            <p className={styles["contacts__paragraph"]}>
              <span className={styles["contacts__span"]}>Для звонков из Москвы</span>
              <a className={styles["contacts__link"]} href="tel:+4959334766">
                +7 495 933-47-66
              </a>
            </p>

            <p className={styles["contacts__paragraph"]}>
              <span className={styles["contacts__span"]}>Для звонков из других регионов России</span>
              <a className={styles["contacts__link"]} href="tel:+8002004766">
                8 800 200-47-66
              </a>
            </p>

            <p className={styles["contacts__paragraph"]}>
              <span className={styles["contacts__span"]}>Email</span>
              <a className={styles["contacts__link"]} href="#">
                info_npf@renpensions.com
              </a>
            </p>

            <p className={styles["contacts__paragraph"]}>
              <br />
            </p>

            <p className={styles["contacts__paragraph"]}>
              <a className={styles["contacts__link"]} href="">
                Написать нам
              </a>
            </p>
          </div>

          <div className={styles["contacts__column"]}>
            <h2 className={styles["contacts__address"]}>Адрес</h2>

            <p className={styles["contacts__paragraph"]}>
              115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
            </p>

            <p className={styles["contacts__heading"]}>Время работы</p>

            <p className={styles["contacts__paragraph"]}>
              Понедельник - пятница: с 9:00 до 19:00 (МСК) <br />
              Суббота и воскресенье: выходной
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
