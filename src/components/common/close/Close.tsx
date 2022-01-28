import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import { CloseProps } from 'src/models/close';
import { CancelStyled } from './CloseStyled';

const Close: FC<CloseProps> = (props) => {
  return (
    <IconButton {...props}>
      <CancelStyled />
    </IconButton>
  );
};

export default Close;
