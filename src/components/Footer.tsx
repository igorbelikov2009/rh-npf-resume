import React, { FC } from "react";
import "../styles/Footer.scss";
import { useNavigate } from "react-router-dom";
import Logotypes from "./general/Logotypes/Logotypes";
import { FooterLinkProps } from "../models/types";
import FooterLink from "./ui/links/FooterLink/FooterLink";

const Footer: FC = () => {
  const navigate = useNavigate();

  const FirstBlock: FooterLinkProps[] = [
    {
      to: "/support#form",
      children: "Написать нам",
    },
    {
      to: "/support#questionsAnswers",
      children: "Вопросы и ответы",
    },
    { to: "/about", children: "О Фонде" },
    { to: "/managment", children: "Руководство фонда" },
  ];

  const SecondBlock: FooterLinkProps[] = [
    {
      children: "Новости",
      to: "/news",
    },
    {
      children: "Налогообложение",
      to: "/taxation",
    },
    {
      children: "Для бизнеса",
      to: "/business",
    },
    {
      children: "Калькулятор",
      to: "/#calculator",
    },
  ];

  const ThiirdBlock: FooterLinkProps[] = [
    {
      children: "Раскрытие информации",
      to: "/info",
    },
    {
      children: "Инвестиционная деятельность",
      to: "/investment",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__top-block">
        <div onClick={() => navigate("/", { replace: true })} className="footer__logotype">
          <Logotypes isBackgroundWhite />
        </div>

        <div>
          <img src="/icons/logoNapf.svg" alt="logo" className="footer__logos" />
          <img src="/icons/logoAeb.svg" alt="logo" className="footer__logos" />
          <img src="/icons/logoExpert.svg" alt="logo" className="footer__logos" />
        </div>
      </div>

      <div className="footer__phone">
        <h2 className="footer__phone-number">8 800 200-47-66</h2>
      </div>

      <div className="footer__content">
        <div className="footer__nav">
          <div className="footer__column">
            {FirstBlock.map((link) => (
              <FooterLink key={link.children} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>

          <div className="footer__column">
            {SecondBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>

          <div className="footer__column">
            {ThiirdBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </div>

          <div className="footer__column">
            <a
              className="footer__copyright-link"
              href="/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf"
            >
              Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд
              (соответствует информации, направленной в Банк России 16.03.2021 г. для размещения на официальном сайте
              Банка России).
            </a>

            <p className="footer__copyright">©2009-2019 НПФРенессанс. Пенсии.</p>

            <p className="footer__copyright">Лицензия № 383/2 от 16 июня 2009 года</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
