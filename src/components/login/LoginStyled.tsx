import React from 'react';
import styled from 'styled-components';
import { Box, CardContent } from '@mui/material';

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  img {
    margin-bottom: 16px;
  }
`;

export const FormStyled = styled((props) => <CardContent {...props} />)`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 0;
`;
