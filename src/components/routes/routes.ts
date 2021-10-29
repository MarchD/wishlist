import { Routes, RouteType } from '../../models/routes'

export const routes: RouteType[] = [
    {
        path: Routes.MAIN_PAGE,
        component: 'Main'
    },{
        path: Routes.PROFILE_PAGE,
        component: 'Profile'
    },{
        path: Routes.WISHLIST_PAGE,
        component: 'Wishlist'
    },{
        path: Routes.USER_PAGE,
        component: 'User'
    },{
        path: Routes.PAGE_NOT_FOUND,
        component: '404'
    }
];
