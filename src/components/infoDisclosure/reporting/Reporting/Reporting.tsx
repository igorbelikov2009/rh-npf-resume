import React, { FC, useState } from "react";
import { optionsItemsReporting, reportings } from "../../../../data/infoDisclosureData";
import ButtonToArchive from "../../../ui/buttons/ButtonToArchive/ButtonToArchive";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import SelectorAndOptionBlock from "../../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import Reports from "../Reports/Reports";
import styles from "./Reporting.module.scss";

interface ReportingProps {
  onClickArchiveReporting: () => void;
}

const Reporting: FC<ReportingProps> = ({ onClickArchiveReporting }) => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [id, setId] = useState("0");
  const [isSelectorOptionBlockVisible, setSelectorOptionBlockVisible] = useState(false);

  // Поучаем данные с сервера
  // const data1 = reportings;
  // const data2 = optionsItemsReporting;

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setId(id);
  };

  const onChangeSelectorOptionBlock = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setId(id);
  };

  const onClickSelector = () => {
    setSelectorOptionBlockVisible((prev) => !prev);
  };

  const onClickSelectorOptionBlock = () => {
    setSelectorOptionBlockVisible(false);
  };

  return (
    <section className={styles["reporting"]}>
      <div className={styles["reporting__container"]}>
        <h1 className={styles["reporting__heading"]}>Отчётность</h1>

        <div className={styles["reporting__flex-container"]}>
          <div className={styles["reporting__select"]}>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItemsReporting}
              isRadioListVisible={isSelectorOptionBlockVisible}
              onClickSelector={onClickSelector}
              emitOnChangeRadioListBlock={onChangeSelectorOptionBlock}
              emitOnClickRadioListBlock={onClickSelectorOptionBlock}
            />
          </div>

          <div className={styles["reporting__adaptive-radio"]}>
            <AdaptiveRadio
              currentValue={currentValue}
              optionsItems={optionsItemsReporting}
              emitValue={onChangeAdaptiveRadio}
            />
          </div>

          <div className={styles["reporting__container-button"]} onClick={onClickArchiveReporting}>
            <ButtonToArchive />
          </div>
        </div>

        <div>
          {reportings &&
            reportings.map((reports, index) => (
              <Reports key={index} reports={reports} isVisible={index === Number(id)} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Reporting;
