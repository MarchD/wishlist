import { ReactNode } from 'react'

export enum Routes {
    MAIN_PAGE = '/',
    PROFILE_PAGE = '/profile',
    WISHLIST_PAGE = '/wishlist',
    USER_PAGE = '/wishlist/:slug',
    PAGE_NOT_FOUND = '/404'
}

export type RouteType = {
    path: Routes,
    component: ReactNode
}

