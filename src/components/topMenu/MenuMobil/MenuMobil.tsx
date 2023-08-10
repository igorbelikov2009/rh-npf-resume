import React, { FC, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuLinkProps } from "../../../models/types";
import DarkIcon from "../../general/DarkIcon/DarkIcon";
import Logotypes from "../../general/Logotypes/Logotypes";
import styles from "./MenuMobil.module.scss";

interface MenuMobilProps {
  closeMenuMobil: () => void;
  isVisible: boolean;
}

const MenuMobil: FC<MenuMobilProps> = ({ isVisible, closeMenuMobil }) => {
  const navigate = useNavigate();
  const [isBackgroundWhite] = useState(true);

  const topLinks: MenuLinkProps[] = [
    { to: "/about", children: "О Фонде" },
    { to: "/managment", children: "Руководство Фондом" },
    { to: "/info", children: "Раскрытие информации" },
    { to: "/investment", children: "Инвестиционная деятельность" },
    { to: "/business", children: "Для бизнеса" },
  ];
  const bottomLinks: MenuLinkProps[] = [
    { to: "/#calculator", children: "Калькулятор" },
    { to: "/support#form", children: "Написать нам" },
    { to: "/support#questionsAnswers", children: "Вопросы и ответы" },
  ];

  return (
    <section className={isVisible ? styles["menu-mobil__right-20"] : styles["menu-mobil__right-100"]}>
      <>
        <div className={styles["menu-mobil__logos"]} onClick={() => navigate("/", { replace: true })}>
          <Logotypes isBackgroundWhite={isBackgroundWhite} />
        </div>

        {topLinks.map((link, index) => (
          <Link to={link.to} onClick={closeMenuMobil} className={styles["menu-mobil__link"]} key={index}>
            {link.children}
          </Link>
        ))}

        <p className={styles["menu-mobil__title"]}>Клиентам</p>

        {bottomLinks.map((link) => (
          <Link to={link.to} key={link.to} onClick={closeMenuMobil} className={styles["menu-mobil__link"]}>
            {link.children}
          </Link>
        ))}

        <div className={styles["menu-mobil__phone"]}>
          <a href="tel:+78002004766" className={styles["menu-mobil__link"]}>
            <p className={styles["menu-mobil__phone-number"]}>8 800 200-47-66</p>
          </a>
        </div>
      </>

      <>
        <p className={styles["menu-mobil__copy-right"]}>©2009-2019 НПФРенессанс. Пенсии</p>

        <p className={styles["menu-mobil__copy-right"]}>Лицензия № 383/2 от 16 июня 2009 года</p>
      </>

      <button className={styles["menu-mobil__button"]}>
        <div className={styles["menu-mobil__icon-container"]} onClick={closeMenuMobil}>
          <DarkIcon icon="Cross" />
        </div>
      </button>
    </section>
  );
};

export default MenuMobil;
