import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TripleIcon from "../components/general/TripleIcon/TripleIcon";
import NewsLink from "../components/news/NewsLink/NewsLink";
import Article from "../components/newsPage/Article/Article";
import { news } from "../data/newsData";
import "../styles/dist/NewsPage.css";

const NewsPage = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id);
  const [isHovered, setHovered] = useState(false);

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = [...news].filter((item) => {
    return item.id === prevID || item.id === nextID;
  });

  // Оставляем в массиве только те новости, ID которых соответствуют id.
  const currentNews = [...news].filter((item) => {
    return item.id === Number(id);
  });

  return (
    <div className="news-page">
      <div className="news-page__head">
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

          {currentNews ? (
            currentNews.map((item) => (
              <Article key={item.id} id={item.id} date={item.date} title={item.date} paragraphs={item.paragraphs} />
            ))
          ) : (
            <div> Новости с ID {id} не найдено</div>
          )}

          {anotherNews &&
            anotherNews.map((item) => (
              <NewsLink key={item.id} date={item.date} title={item.title} id={Number(item.id)} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
