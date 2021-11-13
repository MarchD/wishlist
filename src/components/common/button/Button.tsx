import React, { FC } from 'react'
import { ButtonProps } from '@mui/material'
import { ButtonStyled } from './ButtonStyle'

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button
