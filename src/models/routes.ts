import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router'

export enum Routes {
    MAIN_PAGE = '/',
    PROFILE_PAGE = '/profile',
    USER_WISHLISTS_PAGE = '/wishlists',
    WISHLIST_PAGE = '/wishlist/:slug',
    LOGIN_PAGE = '/login',
    PAGE_NOT_FOUND = '/404'
}

type RouteRole = 'user'

export type RouteType = {
    path: Routes,
    component: ComponentType<RouteComponentProps<any>>
        | ComponentType<any>
        | undefined,
    role?: RouteRole,
    label?: string
}
