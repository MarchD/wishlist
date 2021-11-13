import styled from 'styled-components'
import { Button } from '@mui/material'

export const ButtonStyled = styled(Button)`
  max-width: 250px;
  width: 100%;
  padding: ${props => props.variant === 'text' ? '8px 0' : '8px 16px'};
  margin: ${props => props.variant === 'text' && '0 !important'};
  border: ${props => props.variant === 'contained' && '1px solid black !important'};
  
  &:hover {
    background: ${props => props.variant === 'text' && 'none'};
  }
`
