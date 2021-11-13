import React from 'react'
import CardWrapper from '../layout/card-wrapper/CardWrapper'
import Input from '../input/Input'
import Container from '../layout/container/Container'
import { FormStyled, GroupInputStyled } from './ProfileStyled'
import { ButtonStyled } from '../common/button/ButtonStyle'
import Avatar from '../common/avatar/Avatar'


const Profile = () => {
    return (
        <Container size={'md'}>
            <CardWrapper title={'Профиль'}>
                <Avatar />
                <FormStyled>
                    <GroupInputStyled>
                        <Input label="Email"/>
                        <Input label="Password" type="password"/>
                    </GroupInputStyled>

                    <Input label="Email"/>
                    <Input label="Password" type="password"/>
                    <ButtonStyled variant={'contained'}>Сохранить</ButtonStyled>
                </FormStyled>

            </CardWrapper>
        </Container>
    )
}

export default Profile
