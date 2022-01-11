import React, { FC } from 'react';
import { CardHeader } from '@mui/material';
import { CardWrapperProps } from 'src/models/card';
import Title from '../../common/title/Title';
import { CardStyled } from './CardWrapperStyled';

const CardWrapper: FC<CardWrapperProps> = (props) => {
  const { children, title, ...otherProps } = props;

  return (
    <CardStyled {...otherProps}>
      {title && <CardHeader title={<Title>{title}</Title>} sx={{ mt: 1, mb: 2, p: 0 }} />}
      {children}
    </CardStyled>
  );
};

export default CardWrapper;
