import React, { FC, useState } from "react";
import style from "./TripleIcon.module.scss";

interface TripleIconProps {
  icon: string;
  light: boolean;
  hovered: boolean;
}

const TripleIcon: FC<TripleIconProps> = ({ icon, light, hovered }) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);

  let state = light ? "light" : "dark";

  if (isLocalHovered || hovered) state = "colored";

  return (
    <img
      onMouseOver={() => setIsLocalHovered(true)}
      onMouseOut={() => setIsLocalHovered(false)}
      src={`/icon/triple/${icon}/${state}.svg`}
      alt={icon}
      className={style["triple-icon"]}
    />
  );
};

export default TripleIcon;
