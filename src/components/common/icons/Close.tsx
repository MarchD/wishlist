import React, { FC } from 'react';
import { IconProps } from 'src/models/close';
import { Cancel } from '@mui/icons-material';
import { IconStyled } from './IconStyled';

const Close: FC<IconProps> = (props) => {
  return (
    <IconStyled {...props}>
      <Cancel />
    </IconStyled>
  );
};

export default Close;
