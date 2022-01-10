import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Wish as WishProps } from '../../models/wish';
import styles from './Wish.module.scss';

const Wish: FC<WishProps> = ({ price, title, image }) => {
  return (
    <Card component="button" className={styles.card}>
      <CardMedia component="img" src={image} />
      <CardContent className={styles.content}>
        <Typography variant="body2" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
          {price} грн
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Wish;
