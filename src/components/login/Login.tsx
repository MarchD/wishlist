import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LogoSizes } from 'src/models/logo';
import { useAppDispatch } from 'src/hooks/redux';
import { openModal } from 'src/rtk/features/modalSlice';
import { ModalTypes } from 'src/models/modal';
import { Controller } from 'react-hook-form';
import Logo from '../common/logo/Logo';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../common/input/Input';
import Container from '../layout/container/Container';
import Button from '../common/button/Button';
import { BoxStyled } from './LoginStyled';
import Form from '../layout/form/Form';
import { useFormWithSchema } from '../../hooks/useYupValidationResolver';
import { loginSchema } from '../../shemas';

function Login() {
  const { t } = useTranslation('common');
  const { handleSubmit, control } = useFormWithSchema(loginSchema);
  const dispatch = useAppDispatch();

  const openModalRegistration = () => {
    dispatch(openModal(ModalTypes.REGISTRATION));
  };

  return (
    <Container size="md">
      <BoxStyled>
        <Logo size={LogoSizes.LARGE} link />
        <CardWrapper title={`${t('signIn')} ${t('to')} Wishlist`}>
          <Form onSubmit={handleSubmit((data) => console.log(data, 'data'))}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                  <Input
                    label="Email"
                    onChange={onChange}
                    value={value}
                    helperText={error?.message}
                    type="email"
                  />
                );
              }}
              rules={{ required: true }}
            />

            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                  <Input
                    label={t('password')}
                    onChange={onChange}
                    value={value}
                    helperText={error?.message}
                    type="password"
                  />
                );
              }}
              rules={{ required: true }}
            />

            <CardActions sx={{ gap: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" type="submit">
                {t('signIn')}
              </Button>
              <Button variant="text" onClick={openModalRegistration}>
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
