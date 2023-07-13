/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { IColumn } from "../../../models/types";
import CarouselHeader from "../../general/carousel/CarouselHeader/CarouselHeader";
import FundCarousel from "../FundCarousel/FundCarousel";
import styles from "./AboutFundBlock.module.scss";

const AboutFundBlock = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const aboutFundColumns: IColumn[] = [
    {
      title: "2002",
      description:
        "Дата основания Фонда как части финансовой группы ING в России. Уже в 2003 году в Фонд приходят первые крупные клиенты, что дало Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров.",
    },
    {
      title: "2003",
      description: "В Фонд приходят первые крупные клиенты.",
    },
    {
      title: "2008",
      description: "Клиентами Фонда стали более 70 наших текущих партнеров.",
    },
    {
      title: "2009",
      description:
        "В связи с изменением бизнес стратегии компании ING в России, Фонд был выкуплен крупнейшей Британской страховой компанией AVIVA, что только лишь усилило позиции Фонда.",
    },
    {
      title: "2013",
      description: "Фонд перешел под управление компании WELBI на 100% контролировавшейся НПФ “Благосостояние”.",
    },
    {
      title: "2017",
      description:
        "В результате сделки Фонд вошел в объединенную группу компаний под управлением ООО “Группа Ренессанс Страхование”, одного из крупнейших провайдеров добровольного страхования в России.",
    },
    {
      title: "2018",
      description:
        "Состоялась реорганизация в акционерное общество с одновременным переименованием Фонда в АО НПФ «Ренессанс пенсии».",
    },
  ];

  // для CarouselHeader
  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isBlurredLeft, setIsBlurredLeft] = useState(true);
  const [isHoveredRight, setIsHoveredRight] = useState(true);
  const [isBlurredRight, setIsBlurredRight] = useState(false);

  // для MainCarousel // вычисляем и скролим scrollableElement
  const screenWidth = document.documentElement.clientWidth; // получаем ширину экрана
  const [widthLink, setWidthLink] = useState(0); // ширина контейнера ссылок
  const [amountChildren, setAmountChildren] = useState(0); // количество детей newsContainer
  const [overallWidth, setOverallWidth] = useState(0); // общая длина newsContainer
  const [scrollWidth, setScrollWidth] = useState(0); // длина прокрутки scrollableElement
  const [right, setRight] = useState(0); // значение прокрутки scrollableElement, записываемое в его атрибут style

  //
  const [q, setQ] = useState(0); // значение счётчика, индекс columns[q], который по центру экрана
  const [j, setJ] = useState(0); // если (screenWidth > 855), то по центру экрана два элемента:
  //  columns[q] и columns[j]

  // ширина контейнера ссылок
  const getLinkContainerWidth = (width: React.SetStateAction<number>) => {
    setWidthLink(width);
  };
  // console.log(widthLink);

  useEffect(() => {
    if (aboutFundColumns)
      // получаем количество детей массива, новостных колонок (NewsLinkContainer)
      setAmountChildren(aboutFundColumns.length);
    // высчитываем общую длину карусельной ленты (carousel-tape)
    setOverallWidth(widthLink * amountChildren);
  }, [amountChildren, widthLink, aboutFundColumns]);
  // console.log("amountChildren :" + amountChildren);
  // console.log("overallWidth:" + overallWidth);
  // =================================

  // Получаем значение q
  const getValueQOnClickArrowLeft = () => {
    if (q !== 0) {
      setQ((prev) => prev - 1);
    }
    if (q < 0) {
      setQ(0);
    }
  };
  const getValueQOnClickArrowRight = () => {
    if (screenWidth < 855) {
      if (q < amountChildren - 1) {
        setQ((prev) => prev + 1);
      }
    }
    if (screenWidth > 855) {
      if (q < amountChildren - 2) {
        setQ((prev) => prev + 1);
      }
    }
  };
  // console.log("q: " + q);

  // get value j в зависимости от ширины экрана screenWidth (< 855 или > 855 )
  // во время постройки DOM, определяем данный метод в хук useEffect.
  useEffect(() => {
    if (screenWidth < 855) {
      setJ(q);
    } else {
      setJ(q + 1);
    }
  }, [q, screenWidth]);
  // console.log("q: " + q, "j: " + j);

  // scrolling
  // скролим влево
  useEffect(() => {
    setScrollWidth(q * widthLink);
    setRight(q * widthLink);
  }, [q, widthLink]);

  // скролим вправо
  useEffect(() => {
    setScrollWidth(q * widthLink);
    setRight(q * widthLink);
    if (screenWidth < 855) {
      if (scrollWidth >= overallWidth) {
        setRight(overallWidth - widthLink);
      }
    }
    if (screenWidth > 855) {
      if (scrollWidth >= overallWidth - widthLink) {
        setRight(overallWidth - 2 * widthLink);
      }
    }
  }, [overallWidth, q, screenWidth, scrollWidth, widthLink]);
  // console.log("scrollWidth :" + scrollWidth);
  // console.log("right =" + right);

  // меняем цвет у стрелок и свойства курсора на "cursor: default;"

  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const changeColorArrowsOnClickArrowLeft = () => {
    setIsHoveredRight(true);
    setIsBlurredRight(false);

    if (q === 1) {
      setIsHoveredLeft(false);
      setIsBlurredLeft(true);
    }
  };

  const changeColorArrowOnClickArrowRight = () => {
    setIsHoveredLeft(true);
    setIsBlurredLeft(false);

    if (screenWidth < 855) {
      if (j === amountChildren - 1) {
        setIsHoveredRight(false);
        setIsBlurredRight(true);
      }
    } else if (screenWidth > 855) {
      if (j === amountChildren - 2) {
        setIsHoveredRight(false);
        setIsBlurredRight(true);
      }
    }
  };

  // клик по левой стрелке
  const onClickLeftArrow = () => {
    getValueQOnClickArrowLeft();
    changeColorArrowsOnClickArrowLeft();
  };

  // клик по правой стрелке
  const onClickRightArrow = () => {
    getValueQOnClickArrowRight();
    changeColorArrowOnClickArrowRight();
  };

  return (
    <div>
      <CarouselHeader
        headerTitle="История Фонда"
        isBlurredLeft={isBlurredLeft}
        isBlurredRight={isBlurredRight}
        isHoveredLeft={isHoveredLeft}
        isHoveredRight={isHoveredRight}
        onClickLeft={onClickLeftArrow}
        onClickRight={onClickRightArrow}
      />

      <div className={styles["carousel"]}>
        <div className={styles["scrollableElement"]} style={{ right: `${right}px` }}>
          <FundCarousel columns={aboutFundColumns} jj={j} qq={q} emitWidthColumn={getLinkContainerWidth} />
        </div>
      </div>
    </div>
  );
};

export default AboutFundBlock;
