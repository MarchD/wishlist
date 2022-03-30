import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const InputStyled = styled((props) => <TextField {...props} />)`
  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.orange};
  }

  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${({ theme }) => theme.color.orange};
  }

  outline: ${({ theme }) => theme.color.green};
`;
