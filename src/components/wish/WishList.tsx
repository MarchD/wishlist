import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Wish from './Wish';
import { WishListProps } from '../../models/wish';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../rtk/features/modal';
import { ModalTypes } from '../../models/modal';

const WishList: FC<WishListProps> = (props) => {
  const { wishes } = props;

  const dispatch = useAppDispatch();

  const handleClickBtn = () => {
    dispatch(openModal(ModalTypes.NEW_GIFT));
  };

  return (
    <Grid container spacing={2}>
      {wishes.map((item) => (
        <Grid item xs={6} sm={4} md={3} key={item.id}>
          <Wish {...item} onClick={handleClickBtn} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WishList;
