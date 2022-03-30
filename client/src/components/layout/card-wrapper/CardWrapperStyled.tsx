import React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';

export const CardStyled = styled((props) => <Card {...props} />)`
  width: 100%;
  padding: 1rem 1rem 2rem;
  border: 1px solid;
`;
