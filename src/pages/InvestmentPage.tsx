/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import UserDate from "../api/UserDate/UserDate";
import investImage from "../assets/images/invest/InvestTop.jpg";
import Cards from "../components/general/cards/Cards/Cards";
import TopBlock from "../components/general/TopBlock/TopBlock";
import CompositionReserves from "../components/investment/compositionReserves/CompositionReserves/CompositionReserves";
import InvestmentArchive from "../components/investment/InvestmentArchive/InvestmentArchive";
import InvestmentDescription from "../components/investment/InvestmentDescription/InvestmentDescription";
import PortfolioStructure from "../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure";
import OptionBlockForSelector from "../components/ui/select/OptionBlockForSelector/OptionBlockForSelector";
import { investmentCards, investmentOptions } from "../data/investData";
import { IOptionItem } from "../models/types";
import "../styles/investment.scss";

const InvestmentPage = () => {
  const [clientHeight, setClientHeight] = useState(0);

  // firstSelectController
  const [firstCurrentValue, setFirstCurrentValue] = useState("30 ноября 2021 г.");
  const [, setFirstControllerTop] = useState(0);
  const [firstControllerBottom, setFirstControllerBottom] = useState(0);
  const [firstControllerLeft, setFirstControllerLeft] = useState(0);
  const [firstControllerWidth, setFirstControllerWidth] = useState(0);

  // firstOptionsBlock
  const [firstBlockIdOption, setFirstBlockIdOption] = useState("0");
  const [firstBlockHeight, setFirstBlockHeight] = useState(0);
  const [firstBlockTop, setFirstBlockTop] = useState(0);
  const [firstBlockVisible, setFirstBlockVisible] = useState(false);

  // secondSelectController
  const [secondCurrentValue, setSecondCurrentValue] = useState("30 ноября 2021 г.");
  const [, setSecondControllerTop] = useState(0);
  const [secondControllerBottom, setSecondControllerBottom] = useState(0);
  const [secondControllerLeft, setSecondControllerLeft] = useState(0);
  const [secondControllerWidth, setSecondControllerWidth] = useState(0);

  // secondOptionsBlock secondBlock
  const [secondBlockIdOption, setSecondBlockIdOption] = useState("0");
  const [secondBlockHeight, setSecondBlockHeight] = useState(0);
  const [secondBlockTop, setSecondBlockTop] = useState(0);
  const [secondBlockVisible, setSecondBlockVisible] = useState(false);

  // ПОлучаем данныес сервера
  // const { data: investmentCards, isError } = investmentCardsApi.useGetInvestmentCardsQuery();
  // const { data: investmentOptions } = investmentOptionsAPI.useGetInvestmentOptionsQuery();

  const data1 = investmentCards;
  const data2 = investmentOptions;

  let formattedOptionsItems: IOptionItem[] = [];
  if (investmentOptions) {
    formattedOptionsItems = investmentOptions.map((item) => ({
      date: String(UserDate.format(new Date(item.date))),
      value: String(UserDate.format(new Date(item.date))),
      id: String(item.id),
    }));
  }

  const refFirstSelectBlock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  // вызов функции получения высоты блоков опций OptionsBLock при скроллинге
  const scrollHandler = (event: any) => {
    getOptionsBlockHeight();
  };

  // Получаем значения bottom и left (selectController) из компонента PortfolioStructure.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getFirstControllerBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setFirstControllerBottom(bottom);
    setFirstControllerLeft(left);
  };

  // Получаем значения bottom и left (selectController) из компонента CompositionReserves.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getSecondControllerBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setSecondControllerBottom(bottom);
    setSecondControllerLeft(left);
  };

  // useEffect для первых first Controller и OptionsBlock
  useEffect(() => {
    setFirstBlockTop(firstControllerBottom);
    if (firstControllerBottom <= 0) {
      setFirstBlockTop(0);
    } else if (firstControllerBottom >= clientHeight - firstBlockHeight && firstControllerBottom <= clientHeight) {
      setFirstBlockTop(firstControllerBottom - firstBlockHeight);
    } else if (firstControllerBottom >= clientHeight) {
      setFirstBlockTop(clientHeight - firstBlockHeight);
    }
  }, [clientHeight, firstBlockHeight, firstControllerBottom]);

  // useEffect для вторых second Controller и OptionsBlock
  useEffect(() => {
    setSecondBlockTop(secondControllerBottom);
    if (secondControllerBottom <= 0) {
      setSecondBlockTop(0);
    } else if (secondControllerBottom >= clientHeight - secondBlockHeight && secondControllerBottom <= clientHeight) {
      setSecondBlockTop(secondControllerBottom - secondBlockHeight);
    } else if (secondControllerBottom >= clientHeight) {
      setSecondBlockTop(clientHeight - secondBlockHeight);
    }
  }, [clientHeight, secondBlockHeight, secondControllerBottom]);

  // Клик первого контроллера (first Controller)
  const onClickFirstSelectController = () => {
    // setFirstBlockVisible((prev) => !prev);
    setFirstBlockVisible(!firstBlockVisible);
    setSecondBlockVisible(false);
  };

  // Клик второго контроллера (second Controller)
  const onClickSecondSelectController = () => {
    setSecondBlockVisible(!secondBlockVisible);
    setFirstBlockVisible(false);
  };

  // получаем клик из first OptionsBlock
  const onClickFirstOptionsBlock = () => {
    setFirstBlockVisible(false);
  };

  // получаем клик из Second OptionsBlock
  const onClickSecondOptionsBlock = () => {
    setSecondBlockVisible(false);
  };

  // получаем изменения выбранного значения из first OptionsBlock
  const onChangeFirstOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setFirstCurrentValue(value);
    setFirstBlockIdOption(id);
  };

  // получаем изменения выбранного значения из Second OptionsBlock
  const onChangeSecondOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setSecondCurrentValue(value);
    setSecondBlockIdOption(id);
  };

  // Функция получения высоты окна браузера.
  const getClientHeight = () => {
    setClientHeight(window.innerHeight);
  };

  // функция получения высоты блоков опций
  const getOptionsBlockHeight = () => {
    if (refFirstSelectBlock.current) {
      setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
      setSecondBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
    }
  };

  //  Получаем top, bottom, left, width из компонента PortfolioStructure.tsx при скроллинге
  const onScrollPortfolioStructure = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setFirstControllerTop(top);
    setFirstControllerBottom(bottom);
    setFirstControllerLeft(left);
    setFirstControllerWidth(width);
    // Делаем вызов функции
    getClientHeight();
  };

  //  Получаем top, bottom, left, width из компонента CompositionReserves.tsx при скроллинге
  const onScrollCompositionReserves = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setSecondControllerTop(top);
    setSecondControllerBottom(bottom);
    setSecondControllerLeft(left);
    setSecondControllerWidth(width);
  };

  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />

      {investmentCards && <Cards cards={investmentCards} />}

      <div id="portfolioStructure">
        <PortfolioStructure
          ifPressed={firstBlockVisible}
          selectorValue={firstCurrentValue}
          idOption={firstBlockIdOption}
          onClickSelector={onClickFirstSelectController}
          emitCoords={onScrollPortfolioStructure}
          emitSelectorBottomLeft={getFirstControllerBottomLeft}
        />
      </div>

      <CompositionReserves
        ifPressed={secondBlockVisible}
        selectorValue={secondCurrentValue}
        idOption={secondBlockIdOption}
        onClickSelector={onClickSecondSelectController}
        emitCoords={onScrollCompositionReserves}
        emitSelectorBottomLeft={getSecondControllerBottomLeft}
      />

      <InvestmentArchive />
      <InvestmentDescription />

      <div
        ref={refFirstSelectBlock}
        style={{
          top: `${firstBlockTop}px`,
          left: `${firstControllerLeft + 6}px`,
          width: `${firstControllerWidth - 12}px`,
        }}
        className={firstBlockVisible ? "options-block-visible" : "options-block-hidden"}
      >
        <OptionBlockForSelector
          arrayOptionsBlock={formattedOptionsItems}
          emitValue={onChangeFirstOptionsBlock}
          onClickOptionsBlock={onClickFirstOptionsBlock}
          currentValue={firstCurrentValue}
        />
      </div>

      <div
        style={{
          top: `${secondBlockTop}px`,
          left: `${secondControllerLeft + 6}px`,
          width: `${secondControllerWidth - 12}px`,
        }}
        className={secondBlockVisible ? "options-block-visible" : "options-block-hidden"}
      >
        <OptionBlockForSelector
          arrayOptionsBlock={formattedOptionsItems}
          emitValue={onChangeSecondOptionsBlock}
          onClickOptionsBlock={onClickSecondOptionsBlock}
          currentValue={secondCurrentValue}
        />
      </div>
    </>
  );
};

export default InvestmentPage;
