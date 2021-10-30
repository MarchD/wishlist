import { Routes, RouteType } from '../../models/routes'
import { Main } from '../main'
import { Profile } from '../profile'
import { UserWishlists } from '../user-wishlists'
import { Wishlist } from '../wishlist'
import { Login } from '../login'
import { PageNotFound } from '../page-not-found'

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
