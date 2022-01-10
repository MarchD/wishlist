import React from 'react';
import { Box, CardActions, CardContent } from '@mui/material';
import Logo from '../common/logo/Logo';
import { LogoSizes } from '../../models/logo';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../input/Input';
import Container from '../layout/container/Container';
import Button from '../common/button/Button';
import styles from './Login.module.scss';

function Login() {
  return (
    <Container size="md">
      <Box className={styles.box}>
        <Logo size={LogoSizes.LARGE} link />
        <CardWrapper title="Вход">
          <CardContent component="form" className={styles.form}>
            <Input label="Email" />
            <Input label="Password" type="password" />

            <CardActions sx={{ gap: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" type="submit">
                Войти
              </Button>
              <Button variant="text">Зарегистрироваться</Button>
            </CardActions>
          </CardContent>
        </CardWrapper>
      </Box>
    </Container>
  );
}

export default Login;
