import React from 'react';
import { Routes, RouteType } from './models/routes';
import Profile from './pages/profile/Profile';
import UserWishlists from './pages/user-wishlists/UserWishlists';
import Wishlist from './pages/wishlist/Wishlist';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import NotFound from './pages/not-found/not-found';

export const routes: RouteType[] = [
  {
    path: Routes.MAIN_PAGE,
    component: <Main />,
    role: 'user',
    label: 'main',
  },
  {
    path: Routes.PROFILE_PAGE,
    component: <Profile />,
    role: 'user',
    label: 'myProfile',
  },
  {
    path: Routes.USER_WISHLISTS_PAGE,
    component: <UserWishlists />,
    role: 'user',
    label: 'myLists',
  },
  {
    path: Routes.WISHLIST_PAGE,
    component: <Wishlist />,
    label: 'Wishlist',
  },
  {
    path: Routes.PAGE_NOT_FOUND,
    component: <NotFound />,
    label: '404',
  },
  {
    path: Routes.LOGIN_PAGE,
    component: <Login />,
    label: 'Login',
  },
];
