import React, { FC } from "react";
import { ArchiveLinkProps, IIndicatorRow } from "../../../../models/types";
import ArchiveLink from "../../../ui/links/ArchiveLink/ArchiveLink";
import IndicatorRow from "../IndicatorRow/IndicatorRow";
import styles from "./IndicatorsYear.module.scss";

interface IndicatorsYearProps {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  indicatorRows?: IIndicatorRow[];
  archiveLinks: ArchiveLinkProps[];
}

const IndicatorsYear: FC<IndicatorsYearProps> = ({ isVisible, heading, subheading, archiveLinks, indicatorRows }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className={styles["indicators-year"]}>
            <p className={styles["indicators-year__heading"]}>{heading}</p>

            <p className={styles["indicators-year__subheading"]}>{subheading}</p>
          </div>

          {indicatorRows &&
            indicatorRows.map((indicatorRow, index) => (
              <IndicatorRow key={index} title={indicatorRow.title} index={indicatorRow.index} />
            ))}

          {archiveLinks.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </>
      )}
    </>
  );
};

export default IndicatorsYear;
