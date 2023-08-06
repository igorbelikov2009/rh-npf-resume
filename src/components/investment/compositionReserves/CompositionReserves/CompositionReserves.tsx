import React, { FC, useEffect, useRef, useState } from "react";
import { investmentTablesAPI } from "../../../../store/services/investmentTablesAPI";
import Selector from "../../../ui/select/Selector/Selector";
import CompositionReservesItem from "../CompositionReservesItem/CompositionReservesItem";
import styles from "./CompositionReserves.module.scss";

interface CompositionReservesProps {
  isVisible: boolean;
  selectorValue: string;
  idOption: string;
  onClickSelector: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitSelectorBottomLeft: (bottom: number, left: number) => void;
}

const CompositionReserves: FC<CompositionReservesProps> = ({
  isVisible,
  selectorValue,
  idOption,
  onClickSelector,
  emitCoords,
  emitSelectorBottomLeft,
}) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  // Получаем данные с сервера
  const { data: investmentTables } = investmentTablesAPI.useGetInvestmentTablesQuery();

  const selectorRef = useRef<HTMLDivElement>(null);

  const getselectorRefCoords = () => {
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
    getselectorRefCoords();
  };

  return (
    <section className={styles["composition-of-funds"]}>
      <h1 className={styles["composition-of-funds__heading"]}>Состав средств пенсионных резервов Фонда</h1>

      <div className={styles["composition-of-funds__selection"]} ref={selectorRef}>
        <Selector isVisible={isVisible} value={selectorValue} onClickSelector={onClickSelector} />
      </div>

      {investmentTables &&
        investmentTables.map((arrayOfExpanderTables, index) => (
          <CompositionReservesItem
            key={index}
            arrayOfExpanderTables={arrayOfExpanderTables}
            isVisible={index === Number(idOption)}
          />
        ))}
    </section>
  );
};

export default CompositionReserves;
