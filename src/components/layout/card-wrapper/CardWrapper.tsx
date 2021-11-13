import React, { FC } from 'react'
import { CardHeader } from '@mui/material'
import Title from '../../common/title/Title'
import { CardWrapperProps } from 'src/models/card'
import { CardWrapperStyled } from './CardWrapperStyled'

const CardWrapper: FC<CardWrapperProps> = ({children, title, ...props}) => {
    return (
        <CardWrapperStyled {...props}>
            <CardHeader title={<Title>{title}</Title>} sx={{mt: 1, mb: 2, p: 0}}/>
            {children}
        </CardWrapperStyled>
    )
}

export default CardWrapper
