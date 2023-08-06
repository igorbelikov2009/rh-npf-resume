import React, { FC, useEffect, useRef, useState } from "react";
import { investPercentAPI } from "../../../../store/services/investPercentAPI";
import Selector from "../../../ui/select/Selector/Selector";
import Graph from "../Graph/Graph";
import Percents from "../Percents/Percents";
import styles from "./PortfolioStructure.module.scss";

interface PortfolioStructureProps {
  isVisible: boolean;
  selectorValue: string;
  idOption: string;
  onClickSelector: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitSelectorBottomLeft: (bottom: number, left: number) => void;
}

const PortfolioStructure: FC<PortfolioStructureProps> = ({
  isVisible,
  idOption,
  selectorValue,
  onClickSelector,
  emitCoords,
  emitSelectorBottomLeft,
}) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  // Получаем данные с сервера
  const { data: investPercent } = investPercentAPI.useGetInvestPercentQuery();

  const selectorRef = useRef<HTMLDivElement>(null);

  const getSelectControllerCoords = () => {
    if (selectorRef.current) {
      setTop(selectorRef.current.getBoundingClientRect().top);
      setBottom(selectorRef.current.getBoundingClientRect().bottom);
      setLeft(selectorRef.current.getBoundingClientRect().left);
      setWidth(selectorRef.current.getBoundingClientRect().width);

      emitCoords(top, bottom, left, width);
    }
  };

  useEffect(() => {
    if (selectorRef.current) {
      setBottom(selectorRef.current.getBoundingClientRect().bottom);
      setLeft(selectorRef.current.getBoundingClientRect().left);
      emitSelectorBottomLeft(bottom, left);
    }

    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top]);

  const scrollHandler = () => {
    getSelectControllerCoords();
  };

  return (
    <section className={styles["portfolie-structure"]}>
      <h1 className={styles["portfolie-structure__heading"]}>Структура портфеля</h1>

      <div className={styles["portfolie-structure__selection"]} ref={selectorRef}>
        <Selector isVisible={isVisible} value={selectorValue} onClickSelector={onClickSelector} />
      </div>

      <div className={styles["portfolie-structure__content"]}>
        <Graph />

        {investPercent &&
          investPercent.map((item, index) => (
            <Percents
              key={index}
              percent01={item.percent01}
              percent02={item.percent02}
              percent03={item.percent03}
              percent04={item.percent04}
              percent05={item.percent05}
              percent06={item.percent06}
              isVisible={Number(idOption) === index}
            />
          ))}
      </div>
    </section>
  );
};

export default PortfolioStructure;
