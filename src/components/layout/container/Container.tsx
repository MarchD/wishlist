import React, { FC } from 'react'
import { ContainerProps } from 'src/models/container'
import { ContainerStyled } from './ContainerStyled'

const Container: FC<ContainerProps> = ({size, children}) => {
    return (
        <ContainerStyled maxWidth={size} sx={{}} >
            {children}
        </ContainerStyled>
    )
}

export default Container
