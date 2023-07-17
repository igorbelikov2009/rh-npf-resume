import React, { FC, useEffect, useState } from "react";
import styles from "./SidebarLink.module.scss";

interface SidebarLinkProps {
  itemName: string;
  isActive: boolean;
  id: string;
  emitValueId: (id: string) => void;
}

const SidebarLink: FC<SidebarLinkProps> = ({ itemName, isActive, id, emitValueId }) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    emitValueId(id);
  };

  return (
    <li className={styles.li}>
      <a
        href={`#${itemName}`}
        id={id}
        onClick={handleClick}
        className={isActive ? styles["link_active"] : styles["link"]}
      >
        {itemName}
      </a>
    </li>
  );
};

export default SidebarLink;

/* Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
  https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
  */
