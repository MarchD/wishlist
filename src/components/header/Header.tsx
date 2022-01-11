import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Box, Button as ButtonMaterial } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Routes } from 'src/models/routes';
import { LogoSizes } from 'src/models/logo';
import Logo from '../common/logo/Logo';
import { LinkStyled, ToolbarStyled } from './HeaderStyled';

function Header() {
  const { t } = useTranslation('common');
  const { pathname } = useLocation();

  return pathname !== Routes.LOGIN_PAGE ? (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Logo size={LogoSizes.MEDIUM} link />

        <Box>
          {pathname === Routes.USER_WISHLISTS_PAGE && (
            <ButtonMaterial color="inherit">{t('addList')}</ButtonMaterial>
          )}
          <LinkStyled component={RouterLink} to={Routes.PROFILE_PAGE}>
            {t('myProfile')}
          </LinkStyled>
          <LinkStyled component={RouterLink} to={Routes.USER_WISHLISTS_PAGE}>
            {t('myLists')}
          </LinkStyled>
          <ButtonMaterial color="inherit">{t('exit')}</ButtonMaterial>
        </Box>
      </ToolbarStyled>
    </AppBar>
  ) : null;
}

export default Header;
