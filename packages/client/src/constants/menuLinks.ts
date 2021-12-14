import { RouteLink, RouteName } from './routes';

export type MenuLink = {
  name: RouteName,
  link: RouteLink,
  options?: MenuLink[],
};

export const menuLinks: MenuLink[] = [
  { name: RouteName.home, link: RouteLink.home },
];
