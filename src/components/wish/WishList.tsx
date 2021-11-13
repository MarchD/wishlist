import React, { FC } from 'react'
import Wish from './Wish'
import { Grid } from '@mui/material'
import { WishListProps } from '../../models/wish'

const WishList: FC<WishListProps> = ({wishes}) => {
    return (
        <Grid container spacing={2}>
            {wishes.map((item) => (
                <Grid item xs={6} sm={4} md={3} key={item.id}>
                    <Wish {...item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default WishList
