import React, { FC } from "react";
import DarkIcon from "../../../general/DarkIcon/DarkIcon";
import ArchiveAssetValueRules from "../ArchiveAssetValueRules/ArchiveAssetValueRules";
import ArchivePension from "../ArchivePension/ArchivePension";
import ArchiveReporting from "../ArchiveReporting/ArchiveReporting";
import ArchiveShareholders from "../ArchiveShareholders/ArchiveShareholders";
import styles from "./HidingArchive.module.scss";

interface HidingArchiveProps {
  isVisible: boolean;
  isArchiveShareholdersVisible: boolean;
  isArchivePensionVisible: boolean;
  isArchiveReportingVisible: boolean;
  isArchiveAssetValueRulesVisible: boolean;
  onClickHidingArchive: () => void;
}

const HidingArchive: FC<HidingArchiveProps> = ({
  isVisible,
  isArchiveAssetValueRulesVisible,
  isArchivePensionVisible,
  isArchiveReportingVisible,
  isArchiveShareholdersVisible,
  onClickHidingArchive,
}) => {
  return (
    <section className={isVisible ? styles["left-50"] : styles["left-100"]}>
      <div className={isVisible ? styles["background_blur"] : styles["background"]}></div>

      <div className={isVisible ? styles["archives_left-50"] : styles["archives_left-100"]}>
        <div className={styles["wrapper"]}>
          <div>
            {isArchiveShareholdersVisible && <ArchiveShareholders />}

            {isArchivePensionVisible && <ArchivePension />}

            {isArchiveReportingVisible && <ArchiveReporting />}

            {isArchiveAssetValueRulesVisible && <ArchiveAssetValueRules />}
          </div>

          <div className={isVisible ? styles["top-block_left-50"] : styles["top-block_left-100"]}>
            <p className={styles["heading"]}>Архив</p>

            <div className={styles["image"]} onClick={onClickHidingArchive}>
              <DarkIcon icon="Cross" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HidingArchive;
