import React, { forwardRef, PropsWithChildren } from 'react';
import { CardHeader } from '@mui/material';
import { CardWrapperProps } from 'src/models/card';
import Card from '@mui/material/Card';
import Title from '../../common/title/Title';
import { CardStyled } from './CardWrapperStyled';

const CardWrapper = forwardRef<typeof Card, PropsWithChildren<CardWrapperProps>>((props) => {
  const { children, title, actionComponent, ...otherProps } = props;

  return (
    <CardStyled {...otherProps}>
      {title && (
        <CardHeader
          title={<Title>{title}</Title>}
          action={actionComponent}
          sx={{ mt: 1, mb: 2, p: 0 }}
        />
      )}
      {children}
    </CardStyled>
  );
});

export default CardWrapper;
