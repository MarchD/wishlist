import React, { FC } from 'react'
import { CardMedia, Typography } from '@mui/material'
import { CardContentStyled, CardStyled, CardTypographyStyled } from './WishStyled'
import { Wish as WishProps } from '../../models/wish'

const Wish: FC<WishProps> = ({price, title, image}) => {
    return (
        <CardStyled component={'button'}>
            <CardMedia component={'img'} src={image}/>
            <CardContentStyled>
                <CardTypographyStyled variant={'body2'}>{title}</CardTypographyStyled>
                <Typography variant={'body2'} sx={{whiteSpace: 'nowrap'}}>{price} грн</Typography>
            </CardContentStyled>
        </CardStyled>
    )
}

export default Wish
