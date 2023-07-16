export interface IRoute {
  path: string;
  element?: React.FC<{}>;
}

export interface MenuLinkProps {
  children: string;
  to: string;
  isBackgroundWhite?: boolean;
}

export interface FooterLinkProps {
  children: string;
  to: string;
}

export interface DarkIconProps {
  icon: string;
  isDecreased?: boolean;
}

export interface IColumn {
  title: string;
  description: string;
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
  name: string;
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