import React, { FC } from 'react';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { InputStyled } from './InputStyled';

const Input: FC<TextFieldProps> = (props) => {
  return <InputStyled fullWidth {...props} />;
};

export default Input;
