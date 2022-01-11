import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Logo from '../common/logo/Logo';
import { LogoSizes } from '../../models/logo';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../input/Input';
import Container from '../layout/container/Container';
import Button from '../common/button/Button';
import { BoxStyled, FormStyled } from './LoginStyled';

function Login() {
  const { t } = useTranslation('common');

  return (
    <Container size="md">
      <BoxStyled>
        <Logo size={LogoSizes.LARGE} link />
        <CardWrapper title={`${t('signIn')} ${t('to')} WishList`}>
          <FormStyled component="form">
            <Input label="Email" />
            <Input label="Password" type="password" />

            <CardActions sx={{ gap: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" type="submit">
                {t('signIn')}
              </Button>
              <Button variant="text">{t('signUp')}</Button>
            </CardActions>
          </FormStyled>
        </CardWrapper>
      </BoxStyled>
    </Container>
  );
}

export default Login;
