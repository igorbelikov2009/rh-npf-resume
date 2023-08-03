import React from "react";

export interface IRoute {
  path: string;
  element?: React.FC<{}>;
}

export interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
  isBackgroundWhite?: boolean;
}

export interface FooterLinkProps {
  children: React.ReactNode;
  to: string;
}

export interface IColumn {
  title: string;
  description: string;
}

export interface ICard {
  icon: string;
  title?: string;
  span?: string;
  subtitle: string;
}

export interface RadioItemProps {
  value: string;
  title: string;
  name?: string;
}

export interface RadioProps {
  optionsItems: RadioItemProps[];
  emitValue: (event: string) => void;
  currentValue: string;
}
export interface RadioLabelProps {
  value: string;
  title: string;
  name?: string;
  isActive: boolean;
  emitValue: (event: string) => void;
}

export interface INews {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
}

export interface INewsLink {
  id: number;
  title: string;
  date: string;
}

export interface IInfo {
  paragraph: string;
  number?: number | undefined;
}
export interface IPreliminaryNews {
  id: number;
  title: string;
  preliminaryDate: string;
  arrayInfo: IInfo[];
}

export interface IBusinessCard {
  icon: string;
  header: string;
  titles: string[];
}

export type ICarouselCard = {
  value: string;
  icon: string;
  title: string;
};

export type ITitle = {
  title: string;
};

export interface IObjectQuestionsAnswers {
  question: string;
  answer: string[];
  isParagraph?: boolean;
  isParagraphBefore?: boolean;
}

export interface IExpandingTable {
  tableName: string;
  headings: string[];
  arrayRows: string[][];
}

export interface ITableContributions {
  headings: string[];
  arrayRows: string[][];
}

export interface IAdaptiveRadioItem {
  value: string;
  id: string;
  date: string;
  name?: string;
}

export interface ISwitchItem {
  value: string;
  title: string;
  name: string;
}

export interface IOptionItem {
  date: string;
  value: string;
  id: string;
  name?: string;
}

export interface ISidebarLink {
  itemName: string;
  id: string;
}

export interface IPercent {
  percent01: string;
  percent02: string;
  percent03: string;
  percent04: string;
  percent05: string;
  percent06: string;
}

export interface ArchiveLinkProps {
  href: string;
  title: string;
  subtitle?: string;
}

export interface INotificsContent {
  date: string;
  description: string;
}

export interface ISpecDepositoryBlock {
  subheading: string;
  title: string;
  subtitle: string;
}

export interface IIndicatorRow {
  title: string;
  index: string;
}

export interface IIndicatorsYear {
  heading?: string;
  subheading?: string;
  indicatorRows?: IIndicatorRow[];
  archiveLinks: ArchiveLinkProps[];
}

export interface IReports {
  heading: string;
  links: ArchiveLinkProps[];
}

export interface IReport {
  heading: string;
  archiveLinks: {
    href: string;
    title: string;
    subtitle: string;
  }[];
}
