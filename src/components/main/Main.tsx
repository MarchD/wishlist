import React from 'react'
import Container from '../layout/container/Container'
import { routes } from '../routes/routes'
import { Link as RouterLink } from 'react-router-dom'

const Main = () => {
    return (
        <Container size={'lg'}>
            {routes.map(route => (
                <p>
                    <RouterLink to={route.path}>{route.label}</RouterLink>
                </p>
            ))}
        </Container>
    )
}

export default Main
