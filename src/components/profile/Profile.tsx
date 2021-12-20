import React from 'react'
import CardWrapper from '../layout/card-wrapper/CardWrapper'
import Input from '../input/Input'
import Container from '../layout/container/Container'
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'
import { Form } from 'formik'

const Profile = () => {
    return (
        <Container size={'md'}>
            <CardWrapper title={'Профиль'}>
                <Avatar />
                <Form>
                    <div>
                        <Input label="Email"/>
                        <Input label="Password" type="password"/>
                    </div>

                    <Input label="Email"/>
                    <Input label="Password" type="password"/>
                    <Button variant={'contained'}>Сохранить</Button>
                </Form>

            </CardWrapper>
        </Container>
    )
}

export default Profile
