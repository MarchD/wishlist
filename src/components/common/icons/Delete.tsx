import React, { FC } from 'react';
import { IconProps } from 'src/models/close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconStyled } from './IconStyled';

const Delete: FC<IconProps> = (props) => {
  return (
    <IconStyled {...props}>
      <DeleteOutlinedIcon />
    </IconStyled>
  );
};

export default Delete;
