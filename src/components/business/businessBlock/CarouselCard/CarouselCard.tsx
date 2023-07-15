import React, { FC, useState } from "react";
import TripleIcon from "../../../general/TripleIcon/TripleIcon";
import CarouselRadio from "../CarouselRadio/CarouselRadio";
import styles from "./CarouselCard.module.scss";

interface CarouselCardProps {
  isActive: boolean;
  value: string;
  icon: string;
  title: string;
  emitValue: (value: string) => void;
}

const CarouselCard: FC<CarouselCardProps> = ({ isActive, value, icon, title, emitValue }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlerRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <label
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={isActive ? styles["carousel__card_actived"] : styles["carousel__card"]}
    >
      <CarouselRadio value={value} emitValue={handlerRadio} />

      <div className={styles["carousel__container-icons"]}>
        <TripleIcon hovered={isHovered} icon={icon} light={false} />
      </div>

      <p className={styles["carousel__title"]}> {title} </p>
    </label>
  );
};

export default CarouselCard;
