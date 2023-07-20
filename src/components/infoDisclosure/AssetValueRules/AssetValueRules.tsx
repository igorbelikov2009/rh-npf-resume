import React, { FC } from "react";
import ButtonToArchive from "../../ui/buttons/ButtonToArchive/ButtonToArchive";
import styles from "./AssetValueRules.module.scss";

interface AssetValueRulesProps {
  onClickArchiveAssetValueRules: () => void;
}

const AssetValueRules: FC<AssetValueRulesProps> = ({ onClickArchiveAssetValueRules }) => {
  return (
    <section className={styles["asset-value-rules"]}>
      <div className={styles["asset-value-rules__container"]}>
        <div className={styles["asset-value-rules__wrapper"]}>
          <h2 className={styles["asset-value-rules__heading"]}>Правила определения стоимости чистых активов</h2>

          <a
            className={styles["asset-value-rules__link"]}
            target="_blank"
            href="/pdf/infoOpening/asset-value-rules/Порядок определения стоимости чистых активов  НПФ РП-1577256574330.pdf"
          >
            Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 23.12.2019)
          </a>

          <div className={styles["asset-value-rules__container-button"]} onClick={onClickArchiveAssetValueRules}>
            <ButtonToArchive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetValueRules;
