import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserDate from "../api/useDate/useDate";
import ServerError from "../components/general/ServerError/ServerError";
import ServerIsLoading from "../components/general/ServerIsLoading/ServerIsLoading";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink from "../components/news/NewsLink/NewsLink";
import Article from "../components/newsPage/Article/Article";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { news } from "../data/newsData";
import { INews } from "../models/types";
import { getNews } from "../store/reducers/newsReducer";
import "../styles/NewsPage.scss";

const NewsPage = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id) + 1;
  const [isHovered, setHovered] = useState(false);

  // Получаем данные с newsReducer,
  const dispatch = useAppDispatch();
  const { news, isLoading, error } = useAppSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = [...news].filter((item) => {
    return item.id === prevID || item.id === nextID;
  });

  // Форматируем дату других новостей:
  const formatedAnotherNews: INews[] = [...anotherNews].map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    date: String(UserDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

  // Оставляем в массиве только те новости, ID которых соответствуют id.
  const currentNews = [...news].filter((item) => {
    return item.id === Number(id);
  });

  // форматируем дату текущих новостей:
  const formatedCurrentNews: INews[] = [...currentNews].map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    date: String(UserDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

  return (
    <div className="news-page">
      <div className="news-page__head">
        <div>
          {isLoading && <ServerIsLoading />}
          {error && <ServerError />}
        </div>
        <div className="news-page__container">
          <Link
            to="/news"
            className="news-page__link-to-news"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <div className="news-page__icons">
              <TripleIcon hovered={isHovered} light={false} icon="Arrow Down" />
            </div>
            <p className="news-page__link-title">К списку новостей</p>
          </Link>

          {formatedCurrentNews ? (
            formatedCurrentNews.map((item) => (
              <Article key={item.id} id={item.id} date={item.date} title={item.date} paragraphs={item.paragraphs} />
            ))
          ) : (
            <div> Новости с ID {id} не найдено</div>
          )}

          {formatedAnotherNews &&
            formatedAnotherNews.map((item) => (
              <NewsLink key={item.id} date={item.date} title={item.title} id={Number(item.id)} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
