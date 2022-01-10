import React, { FC } from 'react';
import { Card, CardHeader } from '@mui/material';
import { CardWrapperProps } from 'src/models/card';
import Title from '../../common/title/Title';
import styles from './CardWrapper.module.scss';

const CardWrapper: FC<CardWrapperProps> = ({ children, title, ...props }) => {
  return (
    <Card {...props} className={styles.card}>
      <CardHeader title={<Title>{title}</Title>} sx={{ mt: 1, mb: 2, p: 0 }} />
      {children}
    </Card>
  );
};

export default CardWrapper;
