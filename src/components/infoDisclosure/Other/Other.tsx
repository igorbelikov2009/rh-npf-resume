import React from "react";
import { ArchiveLinkProps } from "../../../models/types";
import ArchiveLink from "../../ui/links/ArchiveLink/ArchiveLink";
import styles from "./Other.module.scss";

const Other = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/other/01 Рейтинг АО НПФ Ренесанс пенсии ruAA-1617266870709.pdf",
      title: "Свидетельство о присвоении рейтинга Эксперт РА",
    },
    {
      href: "/pdf/infoOpening/other/02 Свидетельство о членстве в Ассоциации Европейского Бизнеса-1576773162632.pdf",
      title: "Свидетельство о членстве в Ассоциации Европейского Бизнеса",
    },
    {
      href: "/pdf/infoOpening/other/03 Правила корпоративной этики АО НПФ РП-1576773142054.pdf",
      title: "Правила корпоративной этики АО НПФ «Ренессанс пенсии»",
    },
    {
      href: "/pdf/infoOpening/other/04 npf-terms-of-personal-data-1605258268312.pdf",
      title: "Политика в отношении обработки персональных данных в АО НПФ «Ренессанс пенсии» (редакция 1.0)",
    },
  ];

  return (
    <section className={styles["other"]}>
      <div className={styles["other__container"]}>
        <h2 className={styles["other__heading"]}>Прочие</h2>

        <div className={styles["other__content"]}>
          {links.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Other;
