import React from "react";
import { companyContributions, participantContributions } from "../../data/serviceSupportData";
import TableQ from "../serviceSupport/TableQ/TableQ";
import styles from "./TaxationTable.module.scss";

const TaxationTable = () => {
  return (
    <div className={styles["taxation"]}>
      <div className={styles["expanding__content"]}>
        <p className={styles["paragraph-bold"]}>Для Участника</p>

        <TableQ arrayRows={companyContributions.arrayRows} headings={companyContributions.headings} />

        <p className={styles["paragraph"]}>
          <br />
        </p>

        <TableQ arrayRows={participantContributions.arrayRows} headings={participantContributions.headings} />

        <p className={styles["paragraph"]}>
          <br />
        </p>
        <p className={styles["paragraph"]}>
          * Независимо от факта получения / неполучения социального налогового вычета
        </p>

        <p className={styles["paragraph"]}>
          <br />
        </p>
        <p className={styles["paragraph"]}>
          С 01 января 2008 года налогоплательщику предоставлено право воспользоваться социальным налоговым вычетом в
          сумме фактически уплаченных пенсионных взносов по пенсионному договору, заключенному с российским
          негосударственным пенсионным фондом, в налоговом периоде (согласно ст. 216 НК РФ налоговым периодом является
          один календарный год).
        </p>
        <p className={styles["paragraph"]}>
          Право на получение социального налогового вычета имеют те налогоплательщики (физические лица), которые
          заключили договоры негосударственного пенсионного обеспечения (пенсионные договоры) и/или вносили пенсионные
          взносы по данным договорам с 1 января 2007 года. Договоры могут быть заключены такими физическими лицами в
          пользу себя, либо в пользу супруга (в том числе, в пользу вдовы, вдовца), родителей (в том числе,
          усыновителей), детей-инвалидов (в том числе, усыновленных, находящихся под опекой (попечительством). В
          качестве лиц, которые могут воспользоваться правом на получение социального налогового вычета, выступают
          налогоплательщики НДФЛ. Социальные налоговые вычеты, предусмотренные в п. 1 ст. 219 НК РФ, предоставляются на
          основании письменного заявления налогоплательщика при подаче налоговой декларации 3-НДФЛ в налоговый орган по
          окончании налогового периода (в течение следующего года). К указанному заявлению налогоплательщик должен
          предоставить документы, подтверждающие его фактические расходы по негосударственному пенсионному обеспечению.
        </p>
        <p className={styles["paragraph-heading"]}>
          Обращаем Ваше внимание, что независимо от суммы уплаченных пенсионных взносов за налоговый период, сумма
          социального налогового вычета не может превышать 120 000 рублей в год (сумма НДФЛ к возврату составляет 120
          000 руб. * 13% = 15 600 рублей).
        </p>
        <p className={styles["paragraph"]}>
          Необходимо отметить, что этот максимальный размер вычета является общим для видов расходов, по которым может
          быть применен социальный налоговый вычет в соответствии со ст. 219 НК РФ: на собственное обучение
          налогоплательщика, на лечение и на негосударственное пенсионное обеспечение/добровольное пенсионное
          страхование. Иными словами, максимальный предел ограничивает общую совокупную сумму этих трех видов расходов.
          Если в течение одного налогового периода налогоплательщик понес и расходы на свое обучение, и расходы на
          лечение, и «пенсионные» расходы, то он может самостоятельно выбрать, какие виды расходов и в каких суммах он
          учтет при заявлении социального вычета. По общему правилу социальные налоговые вычеты полагаются каждый
          календарный год, но на следующий год вычет не переносится.
        </p>
        <p className={styles["paragraph"]}>
          В связи с предоставлением налогоплательщику права на социальный налоговый вычет изменился порядок
          налогообложения при расторжении пенсионного договора. В случае расторжения пенсионного договора и выплате
          физическому лицу, который воспользовался предоставленным правом и получил социальный налоговый вычет, выкупной
          суммы, Фонд, как налоговый агент, обязан удержать сумму НДФЛ, начисленную с суммы дохода, равной сумме
          пенсионных взносов, уплаченных физическим лицом по пенсионному договору, за каждый календарный год, в котором
          налогоплательщик имел право на получение социального налогового вычета, начиная с 01 января 2007 года.
        </p>
        <p className={styles["paragraph"]}>
          В случае если налогоплательщик не воспользовался своим правом на получение социального налогового вычета и
          обратился в Фонд в целях расторжения пенсионного договора и получения выкупной суммы, Фонд не удерживает НДФЛ
          с выкупной суммы. При этом, налогоплательщик обязан подтвердить факт неполучения социального налогового вычета
          справкой, выданной налоговым органом по месту регистрации налогоплательщика.
        </p>

        <p className={styles["paragraph"]}>
          <br />
        </p>
        <p className={styles["paragraph-bold"]}>Для наследника/правопреемника</p>
        <p className={styles["paragraph"]}>
          <br />
        </p>

        <p className={styles["paragraph"]}>
          В случае смерти Участника, наследник(и) (правопреемник(и)) в зависимости от условий договора
          негосударственного пенсионного обеспечения имеет(ют) право на средства, отраженные на именном пенсионном
          счете.
        </p>
        <p className={styles["paragraph"]}>
          Средства, отраженные на именном пенсионном счете, предназначенные для выплаты наследнику(ам), не подлежат
          налогообложению (ст. 217 «Налогового кодекса Российской Федерации»), в отличии от средств, предназначенных для
          выплаты правопреемнику(ам).
        </p>
        <p className={styles["paragraph"]}>
          <br />
        </p>
        <p className={styles["paragraph"]}>Мы надеемся, что данная информация будет полезна для Вас.</p>
      </div>
    </div>
  );
};

export default TaxationTable;
