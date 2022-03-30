import React from 'react';
import { Button, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.green};
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`;

export const LinkStyled = styled((props) => <Button {...props} />)`
  color: ${({ theme }) => theme.color.white};
`;
