import { ReactNode } from 'react';

export enum Routes {
  MAIN_PAGE = '/',
  PROFILE_PAGE = '/profile',
  USER_WISHLISTS_PAGE = '/wishlists',
  WISHLIST_PAGE = '/wishlist/:slug',
  LOGIN_PAGE = '/login',
  PAGE_NOT_FOUND = '/404',
}

type RouteRole = 'user';

export type RouteType = {
  path: Routes;
  component: ReactNode;
  role?: RouteRole;
  label?: string;
};
