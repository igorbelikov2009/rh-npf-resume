/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import TripleIcon from "../../general/TripleIcon/TripleIcon";
import styles from "./TopMenu.module.scss";

const TopMenu: FC = () => {
  const [isBackgroundWhite, setBackgroundWhite] = useState(false);

  const [isHamburgerHovered, setHamburgerHovered] = useState(false);
  const [isMenuMobilVisible, setMenuMobilVisible] = useState(false);

  const openMenuMobil = () => {
    setMenuMobilVisible(true);
    document.body.style.overflow = "hidden";
    // console.log(isMenuMobilVisible);
  };

  return (
    <header className={isBackgroundWhite ? styles["top-menu__with-border"] : styles["top-menu"]}>
      <div className={styles["top-menu__container"]}>
        <div className={styles["top-menu__left-block"]}>
          <div
            onMouseOver={() => setHamburgerHovered(true)}
            onMouseOut={() => setHamburgerHovered(false)}
            onClick={openMenuMobil}
            className={styles["top-menu__hamburger"]}
          >
            <TripleIcon icon="Hamburger" light={!isBackgroundWhite} hovered={isHamburgerHovered} />
          </div>

          <div>
            <div>Logotypes</div>
          </div>

          <div className={styles["top-menu__nav"]}>
            <div>MenuLink</div>
          </div>
        </div>

        <div className={styles["top-menu__right-block"]}>
          <div className={styles["top-menu__contacts"]}>top-menu__contacts"</div>
          <div className={styles["top-menu__private-office"]}>
            <div>TripleIcon </div>
            <p className={isBackgroundWhite ? styles["top-menu__title_news"] : styles["top-menu__title"]}>
              Личный кабинет
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
