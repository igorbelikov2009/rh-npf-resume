import React from "react";
import { ArchiveLinkProps } from "../../../../models/types";
import ArchiveLink from "../../../ui/links/ArchiveLink/ArchiveLink";
import styles from "./ArchivePension.module.scss";

const ArchivePension = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/archive-pension/01 pravila_fond_trudovih_nakopleniy.pdf",
      title: 'Правила НПФ "Фонд Трудовых накоплений"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/02 pravila_npf_aviva_18.05.2009 2.pdf",
      title: 'Правила НПФ "Авива"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/03 pravila_aviva_2007 3-.pdf",
      title: 'Правила НПФ "Авива"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/04 Пенсионные правила НПФ ИНГ.pdf",
      title: 'Правила НПФ "ИНГ"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/05 Pension Rules_2005 4.pdf",
      title: 'Правила НПФ "ИНГ"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/06 2008-11-10_pravila_npf_ing 5.pdf",
      title: 'Правила НПФ "ИНГ"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/07 pensionnie_pravila_APO_20.01.2010 6.pdf",
      title: 'Правила НПФ "Авива Пенсионное обеспечение"',
    },
    {
      href: "/pdf/infoOpening/archive-pension/08 pravila_16.08.2011 7.pdf",
      title: 'Правила НПФ "Авива Пенсионное обеспечение"',
    },
  ];

  return (
    <>
      <p className={styles["heading"]}>Пенсионные правила</p>

      {links.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default ArchivePension;
