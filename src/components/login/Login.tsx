import React from 'react'
import Logo from '../common/logo/Logo'
import { LogoSizes } from '../../models/logo'
import { Typography } from '@mui/material'
import CardWrapper from '../layout/card-wrapper/CardWrapper'
import { BoxStyled, ButtonStyled, CardActionsStyled, FormStyled } from './LoginStyle'
import Input from '../input/Input'
import Container from '../layout/container/Container'
import Button from '../common/button/Button'

const Login = () => {
    return (
        <Container size={'md'}>
            <BoxStyled>
                <Logo size={LogoSizes.LARGE}/>
                <CardWrapper title={'Вход'}>
                    <FormStyled component={'form'}>
                        <Input label="Email"/>
                        <Input label="Password" type="password"/>

                        <CardActionsStyled>
                            <Button variant="contained" type="submit">
                                Войти
                            </Button>
                            <Typography>или</Typography>
                            <ButtonStyled variant="text">
                                Зарегистрироваться
                            </ButtonStyled>
                        </CardActionsStyled>
                    </FormStyled>
                </CardWrapper>
            </BoxStyled>
        </Container>
    )
}

export default Login
