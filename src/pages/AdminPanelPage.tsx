/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState, useEffect, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import UserDate from "../api/UserDate/UserDate";
import NewsItem from "../components/adminPanel/NewsItem/NewsItem";
import ServerError from "../components/general/ServerError/ServerError";
import ServerIsLoading from "../components/general/ServerIsLoading/ServerIsLoading";
import MyModal from "../components/modal/MyModal/MyModal";
import { AuthContext } from "../context";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IInfo, INews } from "../models/types";
import { getNews } from "../store/reducers/newsReducer";
import { useAddNewsMutation, useDeleteNewsMutation, useFetchNewsQuery } from "../store/services/newsAPI";
import "../styles/AdminPanel.scss";

const AdminPanel = () => {
  const { setBackgroundWhite } = useContext(AuthContext);
  // Получение данных =======================================================
  // // Получаем данные с newsReducer,
  // const dispatch = useAppDispatch();
  // const { news, isLoading, error } = useAppSelector((state) => state.newsReducer);

  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);

  // // Получаем данные с сервера через service newsAPI
  const { data, isLoading, error } = useFetchNewsQuery();
  let news: INews[] = [];
  if (data) {
    news = data;
  }

  // Сортируем полученные данные:
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

  // Создание, добавление =======================================================
  // Для создания нового объекта (newsItem) достаём сгенерированный в newsAPI
  //               хук useAddNewsMutation()
  const [addNews, { isLoading: isLoadingAdding }] = useAddNewsMutation();

  // title, date, paragraphs для создания нового объекта (newsItem)
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [info, setInfo] = useState<IInfo[]>([]);
  const [modal, setModal] = useState(false);

  const addInfo = () => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
    // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
    // { paragraph: "", number: Date.now() }
    // number (идентификатор) получаем из времени.
    // Без идентификатора функция changeInfo срабатывает одинаково на всех полях info.
    setInfo([...info, { paragraph: "", number: Date.now() }]);
    // console.log(info);
  };

  // Параметром передаём номер number, полученный из времени
  const removeInfo = (num: number | undefined) => {
    // Здесь вызываем функцию setInfo, которая изменяет состояние. По существующему массиву
    // с помощью фунции filter пробегаемся и проверяем: совпадает ли номер элемента
    // с номером, который мы передали параметром.
    setInfo(info.filter((item) => item.number !== num));
    // console.log(info);
  };

  const changeInfo = (key: string, value: string, number: number | undefined) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
    setParagraphs(info.map((item) => item.paragraph));
  };

  // Создаём новый объект (newsItem), как аргумент:
  // Для addNews на этой странице, строка 77.
  // Как body для addNews в newsAPI, строка 19, 22.
  const newsItem: INews = {
    id: 0,
    title: title,
    date: date,
    paragraphs: paragraphs,
  };

  const handleAddNewsItem = async () => {
    if (newsItem.title && newsItem.date && newsItem.paragraphs) {
      await addNews(newsItem).unwrap();
      // console.log(newsItem);
      setTitle("");
      setDate("");
      setInfo([]);
      setModal(false);
    }
  };
  const handleModal = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      setBackgroundWhite(false);
    } else {
      document.body.style.overflow = "";
      setBackgroundWhite(true);
    }
  }, [modal, setBackgroundWhite]);

  // // Для удаления достаём сгенерированный в newsAPI хук useDeleteNewsMutation
  const [deleteNews, { isLoading: isLoadingDelete }] = useDeleteNewsMutation();
  const handleDeleteNews = async (id: number) => {
    await deleteNews(id).unwrap();
  };

  return (
    <div className="admin-panel">
      <>
        {(isLoading || isLoadingAdding) && <ServerIsLoading />}
        {error && <ServerError />}
      </>
      <div className="admin-panel__container">
        <div className="admin-panel__container-input-button">
          <Button variant={modal ? "outline-danger" : "primary"} onClick={handleModal}>
            {modal ? "Закрыть панель администратора" : "Открыть панель администратора"}
          </Button>
        </div>

        <h1 className="admin-panel__heading"> Список всех новостей </h1>

        <div>
          {formatedDateNews &&
            formatedDateNews.map((item) => (
              <NewsItem
                key={item.id}
                id={item.id}
                title={item.date}
                date={item.date}
                paragraphs={item.paragraphs}
                handlerRemove={() => handleDeleteNews(item.id)}
              />
            ))}
        </div>

        <AnimatePresence>
          {modal && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: "hidden" }}
            >
              <MyModal isVisible={modal} setVisible={setModal}>
                <div>
                  <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="admin-panel__container-input-button"
                    placeholder="Введите название новостей"
                  />

                  <h4 className="admin-panel__paragraph">Введите дату создания новостей</h4>

                  <Form.Control
                    type="date"
                    id="start"
                    name="trip-start"
                    min="2015-01-01"
                    max="2022-12-31"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="admin-panel__container-input-button"
                  />

                  <Button
                    className="admin-panel__container-input-button"
                    variant="outline-success"
                    onClick={() => addInfo()}
                  >
                    Добавить параграф
                  </Button>

                  {info.map((i, index) => (
                    <Row key={index}>
                      <Col md={11}>
                        <Form.Control
                          className="admin-panel__container-input-button"
                          placeholder="Введите текст параграфа новостей"
                          value={i.paragraph}
                          onChange={
                            (e) =>
                              //  const changeInfo = (key, value, number) => ...
                              changeInfo("paragraph", e.target.value, i.number)
                            //  номер получаем из элемента текущей итерации
                          }
                        />
                      </Col>

                      <Col md={1}>
                        <Button
                          variant={"outline-danger"}
                          onClick={() => removeInfo(i.number)}
                          // Запомни это. Без такой конфигурации этот onClick работать не будет
                        >
                          Удалить
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>

                <div>
                  <Button variant="outline-success" onClick={handleAddNewsItem}>
                    Добавить новости в список новостей
                  </Button>
                </div>
              </MyModal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminPanel;
