import styled from 'styled-components';
import { Cancel } from '@mui/icons-material';
import React from 'react';

export const CancelStyled = styled((props) => <Cancel {...props} />)`
  font-size: 2rem !important;
  color: ${({ theme }) => theme.color.orange};
`;
