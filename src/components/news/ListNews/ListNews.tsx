import React, { useEffect, useMemo, useState } from "react";
import UserDate from "../../../api/useDate/useDate";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { INews } from "../../../models/types";
import { getNews } from "../../../store/reducers/newsReducer";
import ServerError from "../../general/ServerError/ServerError";
import ServerIsLoading from "../../general/ServerIsLoading/ServerIsLoading";
import AdaptiveRadio from "../../ui/radios/AdaptiveRadio/AdaptiveRadio";
import SelectorAndOptionBlock from "../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock";
import NewsLink from "../NewsLink/NewsLink";
import styles from "./ListNews.module.scss";

const ListNews = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [, setId] = useState("0");
  const [isVisible, setRadioListVisible] = useState(false);

  // Получаем данные с newsReducer,
  const dispatch = useAppDispatch();
  const { news, isLoading, error } = useAppSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  // Из полученных данных создаём radioYears (optionsItems)
  const optionsItems = [...news]
    // Создаём массив из дат новостей, предварительно форматируя их в года
    .map((item) => new Date(item.date).getFullYear())
    // Сортируем массив по возрастанию
    .sort((a, b) => b - a)
    // Фильтруем массив, оставляем только уникальные значения.
    .filter((elem, index, array) => array.indexOf(elem) === index)
    // Создаём массив объектов с ключами:
    .map((item, index) => ({
      id: String(index),
      date: String(item),
      value: String(item),
    }));

  // новости, отфильтрованные по годам
  const newsFilteredByYear = useMemo(() => {
    return [...news].filter((item) => {
      return new Date(item.date).getFullYear() === Number(selectedYear);
    });
  }, [news, selectedYear]);

  // форматируем дату у новостей, отфильтрованных по годам
  const formatedFilteredByYear: INews[] = useMemo(() => {
    return [...newsFilteredByYear].map((item) => ({
      id: Number(item.id),
      title: String(item.title),
      date: String(UserDate.format(new Date(item.date))),
      paragraphs: item.paragraphs,
    }));
  }, [newsFilteredByYear]);

  const onClickSelector = () => {
    setRadioListVisible((prev) => !prev);
  };
  const onChangeRadio = (value: React.SetStateAction<string>, id: string) => {
    setSelectedYear(value);
    setId(id);
  };
  const onClickRadio = () => {
    setRadioListVisible(false);
  };
  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setSelectedYear(value);
    setId(id);
  };

  return (
    <section className={styles["news__section"]}>
      <>
        {isLoading && <ServerIsLoading />}
        {error && <ServerError />}
      </>

      <div className={styles["news__container-select-radio"]}>
        <div className={styles["news__select"]}>
          <SelectorAndOptionBlock
            currentValue={selectedYear}
            optionsItems={optionsItems}
            isVisible={isVisible}
            onClickSelector={onClickSelector}
            emitOnChangeRadio={onChangeRadio}
            emitOnClickRadio={onClickRadio}
          />
        </div>

        <div className={styles["news__radio"]}>
          <AdaptiveRadio currentValue={selectedYear} optionsItems={optionsItems} emitValue={onChangeAdaptiveRadio} />
        </div>
      </div>

      <div className={styles["news__container-news"]}>
        <div className={styles["news__list-news"]}>
          {formatedFilteredByYear.map((item) => (
            <NewsLink key={item.id} date={item.date} title={item.title} id={item.id} />
          ))}
        </div>

        <div className={styles["contact"]}>
          <p className={styles["contact__header"]}>Контакты пресс-службы</p>

          <p className={styles["contact__adress"]}>
            115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
          </p>

          <p className={styles["contact__phone"]}>Телефон: 8 (495) 933-47-66</p>
        </div>
      </div>
    </section>
  );
};

export default ListNews;
