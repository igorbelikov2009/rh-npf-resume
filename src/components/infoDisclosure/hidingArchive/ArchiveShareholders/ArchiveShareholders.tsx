import React from "react";
import { ArchiveLinkProps } from "../../../../models/types";
import ArchiveLink from "../../../ui/links/ArchiveLink/ArchiveLink";
import style from "./ArchiveShareholders.module.scss";

const ArchiveShareholders = () => {
  const linksArchiveShareholders: ArchiveLinkProps[] = [
    {
      href: "/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf",
      title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием находится Фонд (на 16.03.2021)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/02 Beneficiaries structure 04.03.2021.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 04.03.2021)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/03 Beneficiaries structure 18.02.2021.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 18.02.2021)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/04 Beneficiaries structure 08.02.2021.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 08.02.2021)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/05 Список акционеров Фонда 03.09.2020.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 03.09.2020)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/06 Beneficiaries structure 27.03.2020.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 27.03.2020)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/07 Beneficiaries structure 11.03.2020.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 11.03.2020)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/08 Beneficiaries structure 31.12.2019.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 31.12.2019)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/09 Beneficiaries structure 05.12.2019.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 05.12.2019)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/10 Beneficiaries structure 30.09.2019.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 30.09.2019)",
    },
    {
      href: "/pdf/infoOpening/archive-aktsionerov/11 Beneficiaries structure 25.07.2019-1577255864084.pdf",
      title:
        "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 25.07.2019)",
    },
  ];

  return (
    <>
      <p className={style["heading"]}>Структура и состав акционеров</p>

      {linksArchiveShareholders.map((link, index) => (
        <ArchiveLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default ArchiveShareholders;
