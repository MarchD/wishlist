import React, { FC } from 'react';
import { Cancel } from '@mui/icons-material';
import { IconProps } from '@Models/close';
import { IconStyled } from './IconStyled';

const Close: FC<IconProps> = (props) => {
  return (
    <IconStyled {...props}>
      <Cancel />
    </IconStyled>
  );
};

export default Close;
