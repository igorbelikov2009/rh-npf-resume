import React, { FC, useState } from "react";
import { ArchiveLinkProps } from "../../../../models/types";
import TripleIcon from "../../../general/TripleIcon/TripleIcon";
import styles from "./ArchiveLink.module.scss";

const ArchiveLink: FC<ArchiveLinkProps> = ({ href, title, subtitle }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <a
      target="_blank"
      className={styles["archive-link"]}
      href={href}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      rel="noreferrer"
    >
      <div className={styles["archive-link__icon"]}>
        <TripleIcon hovered={isHovered} light={false} icon="Pdf" />
      </div>

      <div className={styles["archive-link__row"]}>
        <p className={styles["archive-link__title"]}>{title}</p>

        <p className={styles["archive-link__subtitle"]}>{subtitle}</p>
      </div>
    </a>
  );
};

export default ArchiveLink;
