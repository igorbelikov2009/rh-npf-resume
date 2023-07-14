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
