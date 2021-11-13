import styled from 'styled-components'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const CardStyled = styled((props) => <Card {...props}/>)`
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  cursor: pointer;
`

export const CardContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

export const CardTypographyStyled = styled((props) => <Typography {...props}/>)`
  font-size: 0.785rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
