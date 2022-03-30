import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardStyled = styled((props) => <Card {...props} />)`
  border: 1px solid ${({ theme }) => theme.color.black};
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  cursor: pointer;
`;

export const ContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const TitleStyled = styled(Typography)`
  text-align: left;
  font-size: 0.785rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
