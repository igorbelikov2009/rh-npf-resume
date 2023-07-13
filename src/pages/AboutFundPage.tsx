import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";
import AboutUs from "../components/aboutFund/AboutUs/AboutUs";
import AboutFundBlock from "../components/aboutFund/AboutFundBlock/AboutFundBlock";
import Cards from "../components/general/cards/Cards/Cards";

const AboutFundPage = () => {
  const aboutFundCards = [
    {
      icon: "Calendar",
      title: "17 лет",
      span: "на рынке",
      subtitle: "Фонд 'Ренессанс пенсии' основан в 2002 году",
    },
    {
      icon: "High Rate",
      title: "Высокий ",
      span: "рейтинг",
      subtitle: "Надежность ruАА- по оценке Эксперт РА",
    },
    {
      icon: "Users",
      title: "41 000",
      span: "человек",
      subtitle: " участники пенсионной программы",
    },
    {
      icon: "Partner",
      title: "150",
      span: "компаний",
      subtitle: "заботятся о пенсиях сотрудников",
    },
    {
      icon: "Bank",
      title: "17 млрд",
      span: "рублей",
      subtitle: "пенсионных резервов в Фонде",
    },
  ];

  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      <AboutUs />
      <AboutFundBlock />
      {aboutFundCards && <Cards cards={aboutFundCards} />}
    </>
  );
};

export default AboutFundPage;
