import React, { useState } from "react";
import { optionsItemsFundPerformance } from "../../../../data/infoDisclosureData";
import { fundIndicatorsAPI } from "../../../../store/services/fundIndicatorsAPI";
import ServerError from "../../../general/ServerError/ServerError";
import ServerIsLoading from "../../../general/ServerIsLoading/ServerIsLoading";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import SelectorAndOptionBlock from "../../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import IndicatorsYear from "../IndicatorsYear/IndicatorsYear";
import styles from "./FundPerformance.module.scss";

const FundPerformance = () => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [idOptions, setIdOptions] = useState("0");
  const [isVisible, setVisible] = useState(false);

  // Получаем данные с сервера
  const { data: fundIndicators, isLoading, isError } = fundIndicatorsAPI.useGetFundIndicatorsQuery();

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };

  const onClickSelector = () => {
    setVisible((prev) => !prev);
  };
  const onChangeRadio = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };
  const onClickRadio = () => {
    setVisible(false);
  };

  return (
    <section className={styles["fund-performance"]}>
      <div className={styles["fund-performance__container"]}>
        <h1 className={styles["fund-performance__heading"]}>Показатели деятельности</h1>

        <div className={styles["fund-performance__flex-container"]}>
          <div className={styles["fund-performance__selector"]}>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItemsFundPerformance}
              isVisible={isVisible}
              onClickSelector={onClickSelector}
              emitOnChangeRadio={onChangeRadio}
              emitOnClickRadio={onClickRadio}
            />
          </div>

          <div className={styles["fund-performance__adaptive-radio"]}>
            <AdaptiveRadio
              optionsItems={optionsItemsFundPerformance}
              currentValue={currentValue}
              emitValue={onChangeAdaptiveRadio}
            />
          </div>
        </div>

        {isLoading && <ServerIsLoading />}
        {isError && <ServerError />}

        <div className={styles["fund-performance__indicators"]}>
          {fundIndicators &&
            fundIndicators.map((item, index) => (
              <IndicatorsYear
                key={index}
                heading={item.heading}
                subheading={item.subheading}
                archiveLinks={item.archiveLinks}
                indicatorRows={item.indicatorRows}
                isVisible={Number(idOptions) === index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FundPerformance;
