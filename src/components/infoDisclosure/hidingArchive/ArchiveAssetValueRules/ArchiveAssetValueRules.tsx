import React from "react";
import { ArchiveLinkProps } from "../../../../models/types";
import ArchiveLink from "../../../ui/links/ArchiveLink/ArchiveLink";
import styles from "./ArchiveAssetValueRules.module.scss";

const ArchiveAssetValueRules = () => {
  const links: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/archive-asset/01 Порядок определения стоимости чистых активов Фонда архив.pdf",
      title: "Порядок определения стоимости чистых активов Фонда",
    },
    {
      href: "/pdf/infoOpening/archive-asset/02 Порядок определения стоимости чистых активов РП (опубликовано 25.12.2018).pdf",
      title: "Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 25.12.2018)",
    },
  ];

  return (
    <>
      <p className={styles["heading"]}>Правила определения стоимости чистых активов</p>

      {links.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default ArchiveAssetValueRules;
