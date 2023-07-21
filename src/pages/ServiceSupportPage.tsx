import React from "react";
import supportImage from "../assets/images/support/supportTop.jpg";
import TopBlock from "../components/general/TopBlock/TopBlock";
import PensionPrograms from "../components/serviceSupport/PensionPrograms/PensionPrograms";
import QuestionsAnswers from "../components/serviceSupport/QuestionsAnswers/QuestionsAnswers";
import SupportForm from "../components/serviceSupport/SupportForm/SupportForm";

const ServiceSupportPage = () => {
  return (
    <>
      <TopBlock heading="Поддержка" image={supportImage} />

      <div>
        <div id={"questionsAnswers"}>
          <QuestionsAnswers />
        </div>

        <PensionPrograms />

        <div id={"form"}>
          <SupportForm />
        </div>
      </div>
    </>
  );
};

export default ServiceSupportPage;
