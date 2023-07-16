import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { useState } from "react";
import { companyContributions, participantContributions } from "../../../data/serviceSupportData";
import ExpandingPanel from "../../general/expanding/ExpandingPanel/ExpandingPanel";
import TableQ from "../TableQ/TableQ";
import styles from "./QuestionAnswerTable.module.scss";

const QuestionAnswerTable = () => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="expanding">
      <ExpandingPanel
        isContentVisible={isVisible}
        panelName="Какие налоги уплачиваются в связи с участием в пенсионной программе?"
        onClickExpanding={expanderHandler}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles["expanding__content"]}>
              <p className={styles["paragraph"]}>Порядок налогообложения при выплате пенсий и выкупных сумм:</p>

              <TableQ arrayRows={companyContributions.arrayRows} headings={companyContributions.headings} />

              <p className={styles["paragraph"]}>
                <br />
              </p>

              <TableQ arrayRows={participantContributions.arrayRows} headings={participantContributions.headings} />

              <p className={styles["paragraph"]}>
                * Независимо от факта получения / неполучения социального налогового вычета
              </p>

              <p className={styles["paragraph"]}>
                Участникам пенсионных программ предоставляются налоговые льготы - возможность получить социальный
                налоговый вычет в размере 13% от суммы уплаченных взносов по личному договору негосударственного
                пенсионного обеспечения (максимальный размер суммы взносов для получения налогового вычета – 120 000
                рублей/год).
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default QuestionAnswerTable;
