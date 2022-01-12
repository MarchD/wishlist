import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LogoSizes } from 'src/models/logo';
import { useAppDispatch } from 'src/hooks/redux';
import { openModal } from 'src/rtk/features/modalSlice';
import { ModalTypes } from 'src/models/modal';
import Logo from '../common/logo/Logo';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../common/input/Input';
import Container from '../layout/container/Container';
import Button from '../common/button/Button';
import { BoxStyled } from './LoginStyled';
import Form from '../layout/form/Form';

function Login() {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();

  return (
    <Container size="md">
      <BoxStyled>
        <Logo size={LogoSizes.LARGE} link />
        <CardWrapper title={`${t('signIn')} ${t('to')} Wishlist`}>
          <Form>
            <Input label="Email" />
            <Input label={t('password')} type="password" />

            <CardActions sx={{ gap: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" type="submit">
                {t('signIn')}
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  dispatch(openModal(ModalTypes.REGISTRATION));
                }}
              >
                {t('signUp')}
              </Button>
            </CardActions>
          </Form>
        </CardWrapper>
      </BoxStyled>
    </Container>
  );
}

export default Login;
