import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Routes } from '../../models/routes'
import { AppBar, Box, Button as ButtonMaterial, Toolbar } from '@mui/material'
import Logo from '../common/logo/Logo'
import { LogoSizes } from '../../models/logo'
import styles from './Header.module.scss'

const Header = () => {
    const {pathname} = useLocation()
    return pathname !== Routes.LOGIN_PAGE ? <AppBar position="sticky">
        <Toolbar className={styles.toolbar}>
            <Logo size={LogoSizes.MEDIUM} link/>

            <Box>
                {pathname === Routes.USER_WISHLISTS_PAGE &&
                <ButtonMaterial color="inherit">Добавить список</ButtonMaterial>}
                <ButtonMaterial className={styles.link} component={RouterLink} to={Routes.PROFILE_PAGE}>Мой профиль</ButtonMaterial>
                <ButtonMaterial className={styles.link} component={RouterLink} to={Routes.USER_WISHLISTS_PAGE}>Мои списки</ButtonMaterial>
                <ButtonMaterial color="inherit">Выйти</ButtonMaterial>
            </Box>

        </Toolbar>
    </AppBar> : null
}

export default Header
