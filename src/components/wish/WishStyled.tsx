import React from 'react';
import { Card, CardContent, styled, Typography } from '@mui/material';

export const CardStyled = styled((props) => <Card {...props} />)`
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
