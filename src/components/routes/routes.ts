import { Routes, RouteType } from '../../models/routes'
import Main from '../main/Main'
import Profile from '../profile/Profile'
import UserWishlists from '../user-wishlists/UserWishlists'
import Wishlist from '../wishlist/Wishlist'
import Login from '../login/Login'
import PageNotFound from '../page-not-found/page-not-found'

export const routes: RouteType[] = [
    {
        path: Routes.MAIN_PAGE,
        component: Main,
        role: 'user'
    },{
        path: Routes.PROFILE_PAGE,
        component: Profile,
        role: 'user'
    },{
        path: Routes.USER_WISHLISTS_PAGE,
        component: UserWishlists,
        role: 'user'
    },{
        path: Routes.WISHLIST_PAGE,
        component: Wishlist
    },{
        path: Routes.PAGE_NOT_FOUND,
        component: PageNotFound
    },{
        path: Routes.LOGIN_PAGE,
        component: Login
    }
];
