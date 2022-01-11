import React, { FC } from 'react';
import { AvatarProps } from '@mui/material';
import { AvatarStyled } from './AvatarStyled';

const Avatar: FC<AvatarProps> = (props) => {
  return <AvatarStyled {...props} sx={{ width: 150, height: 150 }} />;
};

export default Avatar;
