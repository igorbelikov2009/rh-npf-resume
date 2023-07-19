import React from "react";
import newsImage from "../assets/images/news/newsTop.jpg";
import TopBlock from "../components/general/TopBlock/TopBlock";
import ListNews from "../components/news/ListNews/ListNews";

const News = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
    </>
  );
};

export default News;
