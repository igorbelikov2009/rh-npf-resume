import React, { FC } from "react";
import { ITableContributions } from "../../../models/types";
import styles from "./TableQ.module.scss";

const TableQ: FC<ITableContributions> = ({ headings, arrayRows }) => {
  return (
    <div className={styles["table__table-container"]}>
      <div className={styles["table__table"]}>
        <table>
          <thead>
            <tr className={styles["tr"]}>
              {headings.map((heading, index) => (
                <td key={index} className={styles["td"]}>
                  <p className={styles["table__headers-row"]}> {heading} </p>
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {arrayRows.map((row, index) => (
              <tr key={index} className={styles["tr"]}>
                {row.map((cell, index) => (
                  <td key={index} className={styles["td"]}>
                    <p className={styles["table__cell-row"]}>{cell}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableQ;
