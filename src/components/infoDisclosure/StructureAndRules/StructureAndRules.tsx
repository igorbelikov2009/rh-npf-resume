import React, { FC } from "react";
import ButtonToArchive from "../../ui/buttons/ButtonToArchive/ButtonToArchive";
import styles from "./StructureAndRules.module.scss";

interface StructureAndRulesProps {
  onClickArchiveShareholders: () => void;
  onClickArchivePension: () => void;
}

const StructureAndRules: FC<StructureAndRulesProps> = ({ onClickArchivePension, onClickArchiveShareholders }) => {
  return (
    <section className={styles["structure-and-rules"]}>
      <div className={styles["container"]}>
        <div className={styles["column"]}>
          <h1 className={styles["heading"]}>Структура и состав акционеров</h1>

          <a target="_blank" className={styles["link"]} href="/pdf/infoOpening/Список акционеров фонда.pdf">
            Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд
            (соответствует информации, направленной в Банк России 04.08.2021 г. для размещения на официальном сайте
            Банка России)
          </a>

          <div className={styles["container-button"]} onClick={onClickArchiveShareholders}>
            <ButtonToArchive />
          </div>
        </div>

        <div className={styles["column"]}>
          <h1 className={styles["heading"]}>Пенсионные правила</h1>

          <a target="_blank" className={styles["link"]} href="/pdf/infoOpening/пенсионные правила.pdf">
            Пенсионные правила (PDF)
          </a>

          <div className={styles["container-button"]} onClick={onClickArchivePension}>
            <ButtonToArchive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureAndRules;
