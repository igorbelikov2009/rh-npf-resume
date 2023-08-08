import React, { FC } from "react";
import { IReport } from "../../../../models/types";
import ArchiveLink from "../../../ui/links/ArchiveLink/ArchiveLink";
import styles from "./Report.module.scss";

const Report: FC<IReport> = ({ heading, archiveLinks }) => {
  return (
    <>
      <div className={styles["block-header"]}>
        <p className={styles["block-header__heading"]}>{heading}</p>
      </div>

      {archiveLinks.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} subtitle={link.subtitle} />
      ))}
    </>
  );
};

export default Report;
