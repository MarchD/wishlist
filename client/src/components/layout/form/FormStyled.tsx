import styled from 'styled-components';
import { CardContent } from '@mui/material';
import React from 'react';

export const FormStyled = styled((props) => <CardContent {...props} />)`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 0;
`;
