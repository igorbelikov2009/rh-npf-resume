import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC } from "react";
import { IExpandingTable } from "../../../../models/types";
import ExpandingTable from "../../../general/expanding/ExpandingTable/ExpandingTable";

interface CompositionReservesItemProps {
  isVisible: boolean;
  arrayOfExpanderTables: IExpandingTable[];
}

const CompositionReservesItem: FC<CompositionReservesItemProps> = ({ isVisible, arrayOfExpanderTables }) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div>
              {arrayOfExpanderTables.map((expander, index) => (
                <ExpandingTable key={index} oneExpandingTable={expander} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompositionReservesItem;
