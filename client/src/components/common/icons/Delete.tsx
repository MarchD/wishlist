import React, { FC } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconProps } from '@Models/close';
import { IconStyled } from './IconStyled';

const Delete: FC<IconProps> = (props) => {
  return (
    <IconStyled {...props}>
      <DeleteOutlinedIcon />
    </IconStyled>
  );
};

export default Delete;
