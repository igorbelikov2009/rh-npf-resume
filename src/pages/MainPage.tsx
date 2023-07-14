import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import mainImage from "../assets/images/main/mainTop.jpg";
import Info from "../components/mainPage/Info/Info";
import Cards from "../components/general/cards/Cards/Cards";
import Calculator from "../components/mainPage/calculator/Calculator/Calculator";
import ImagesCalculator from "../components/mainPage/ImagesCalculator/ImagesCalculator";
import { cardsMainPage } from "../data/dist/CardsMainPage";

const MainPage = () => {
  return (
    <>
      <TopBlock
        heading="Уверенность в будущем,"
        headingSpan=" доступная каждому"
        subheading="Обеспечьте себе стабильность и приступайте"
        subheadingSpan=" к реализации своих самых смелых планов!"
        image={mainImage}
      />

      <Info />
      <Cards cards={cardsMainPage} />

      <div id="calculator">
        <Calculator />
      </div>

      <ImagesCalculator />
    </>
  );
};

export default MainPage;
