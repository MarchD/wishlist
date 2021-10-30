import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../models/routes'

const Header = () => {
    return (
        <div>
            <Link to={Routes.MAIN_PAGE}>Main</Link>
            <Link to={Routes.LOGIN_PAGE}>Login</Link>
            <Link to={Routes.WISHLIST_PAGE}>Wishlist</Link>
            <Link to={Routes.PROFILE_PAGE}>Profile</Link>
            <Link to={Routes.USER_WISHLISTS_PAGE}>User wishlists</Link>
            <Link to={Routes.PAGE_NOT_FOUND}>Main</Link>
        </div>
    )
}

export default Header
