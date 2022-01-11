import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';

export const ContainerStyled = styled((props) => <Container {...props} />)`
  padding: 4rem 1rem 1rem;
  //64 is height of header
  min-height: 100vh - 64px;
`;
