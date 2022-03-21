import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import Avatar from '../../components/common/avatar/Avatar';
import { UserBlockStyled, WishlistStyled } from './WishlistStyled';
import { wishes } from '../../mocked-data/wishes';
import Wish from '../../components/wish/Wish';
import Title from '../../components/common/title/Title';

const Wishlist: FC = () => {
  return (
    <WishlistStyled size="lg">
      <UserBlockStyled title="User Name">
        <Avatar />
        <Title>02.03.1993</Title>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu
        </Typography>
      </UserBlockStyled>
      <Grid container spacing={2}>
        {wishes[0].list.map((item) => (
          <Grid item key={item.id}>
            <Wish {...item} />
          </Grid>
        ))}
      </Grid>
    </WishlistStyled>
  );
};

export default Wishlist;
