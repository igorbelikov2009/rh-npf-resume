export interface IRoute {
  path: string;
  element?: React.FC<{}>;
}

export interface MenuLinkProps {
  children: string;
  to: string;
  isBackgroundWhite?: boolean;
}
