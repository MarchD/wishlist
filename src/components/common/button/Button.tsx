import React, { FC } from 'react';
import { ButtonProps } from '@mui/material';
import { ButtonStyled } from './ButtonStyled';

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'text', ...otherProps } = props;

  return (
    <ButtonStyled {...otherProps} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
