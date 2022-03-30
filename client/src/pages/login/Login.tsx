import React from 'react';
import { CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import Logo from '@Components/common/logo/Logo';
import CardWrapper from '@Components/layout/card-wrapper/CardWrapper';
import Input from '@Components/common/input/Input';
import Container from '@Components/layout/container/Container';
import Button from '@Components/common/button/Button';
import Form from '@Components/layout/form/Form';
import { LogoSizes } from '@Models/logo';
import { useAppDispatch } from '@Hooks/redux';
import { openModal } from '@Rtk/features/modal';
import { ModalTypes } from '@Models/modal';
import { useFormWithSchema } from '@Hooks/useYupValidationResolver';
import { loginSchema } from '@src/shemas';
import { BoxStyled } from './LoginStyled';

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
