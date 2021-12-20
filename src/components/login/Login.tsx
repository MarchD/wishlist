import React from 'react'
import Logo from '../common/logo/Logo'
import { LogoSizes } from '../../models/logo'
import { Box, CardActions, CardContent, Typography } from '@mui/material'
import CardWrapper from '../layout/card-wrapper/CardWrapper'
import Input from '../input/Input'
import Container from '../layout/container/Container'
import Button from '../common/button/Button'
import styles from './Login.module.scss'

const Login = () => {
    return (
        <Container size={'md'}>
            <Box className={styles.box}>
                <Logo size={LogoSizes.LARGE}/>
                <CardWrapper title={'Вход'}>
                    <CardContent component={'form'} className={styles.form}>
                        <Input label="Email"/>
                        <Input label="Password" type="password"/>

                        <CardActions>
                            <Button variant="contained" type="submit">
                                Войти
                            </Button>
                            <Typography>или</Typography>
                            <Button variant="text">
                                Зарегистрироваться
                            </Button>
                        </CardActions>
                    </CardContent>
                </CardWrapper>
            </Box>
        </Container>
    )
}

export default Login
