/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState, useEffect, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import UserDate from "../api/UserDate/UserDate";
import NewsItem from "../components/adminPanel/NewsItem/NewsItem";
import { AuthContext } from "../context";
import { news } from "../data/newsData";
import { IInfo, INews } from "../models/types";
import "../styles/AdminPanel.scss";

const AdminPanel = () => {
  const { setBackgroundWhite } = useContext(AuthContext);

  const data = news;
  // Полученный массив новостей сортируем по дате
  const newsSortedByDate: INews[] = [...news].sort((a, b) =>
    new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
  );

  // Далее, в массиве новостей мы форматируем дату
  const formatedDateNews: INews[] = [...newsSortedByDate].map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    date: String(UserDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

  // title, date, paragraphs для создания нового объекта (newsItem)
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [info, setInfo] = useState<IInfo[]>([]);
  const [modal, setModal] = useState(false);

  const handlerModal = () => {
    setModal((prev) => !prev);
  };

  const handleDeleteNews = () => {
    console.log("delete");
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel__container">
        <div className="admin-panel__container-input-button">
          <Button variant={modal ? "outline-danger" : "primary"} onClick={handlerModal}>
            {modal ? "Закрыть панель администратора" : "Открыть панель администратора"}
          </Button>
        </div>

        <h1 className="admin-panel__heading"> Список всех новостей </h1>

        <div>
          {news &&
            news.map((item) => (
              <NewsItem
                key={item.id}
                id={item.id}
                title={item.date}
                date={item.date}
                paragraphs={item.paragraphs}
                handlerRemove={handleDeleteNews}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
