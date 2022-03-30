import React, { FC } from 'react';
import { ContainerProps } from '@Models/container';
import { ContainerStyled } from './ContainerStyled';

const Container: FC<ContainerProps> = (props) => {
  const { size, children, ...otherProps } = props;

  return (
    <ContainerStyled maxWidth={size} {...otherProps}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
