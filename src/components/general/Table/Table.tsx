import React, { FC } from "react";
import styles from "./Table.module.scss";

export interface TableProps {
  headings: string[];
  arrayRows: string[][];
}

const Table: FC<TableProps> = ({ headings, arrayRows }) => {
  return (
    <div className={styles["table"]}>
      <div className={styles["table__scrolling"]}>
        <table>
          <thead>
            <tr className={styles["tr"]}>
              {headings.map((heading, index) => (
                <th key={index} className={styles["th"]}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {arrayRows.map((row, index) => (
              <tr key={index} className={styles["tr"]}>
                {row.map((cell, index) => (
                  <td key={index} className={styles["td"]}>
                    {cell}
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
export default Table;
