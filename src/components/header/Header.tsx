import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Routes } from '../../models/routes'
import { AppBar, Box, Button as ButtonMaterial } from '@mui/material'
import Logo from '../common/logo/Logo'
import { LogoSizes } from '../../models/logo'
import { LinkStyled, ToolbarStyled } from './HeaderStyled'

const Header = () => {
    const {pathname} = useLocation()
    return pathname !== Routes.LOGIN_PAGE ? <AppBar position="sticky">
        <ToolbarStyled>
            <Logo size={LogoSizes.MEDIUM} link/>

            <Box>
                {pathname === Routes.USER_WISHLISTS_PAGE &&
                <ButtonMaterial color="inherit">Добавить список</ButtonMaterial>}
                <LinkStyled component={RouterLink} to={Routes.PROFILE_PAGE}>Мой профиль</LinkStyled>
                <LinkStyled component={RouterLink} to={Routes.USER_WISHLISTS_PAGE}>Мои списки</LinkStyled>
                <ButtonMaterial color="inherit">Выйти</ButtonMaterial>
            </Box>

        </ToolbarStyled>
    </AppBar> : null
}

export default Header
