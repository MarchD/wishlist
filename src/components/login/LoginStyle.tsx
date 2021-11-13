import styled from 'styled-components'
import { Box, CardActions, CardContent } from '@mui/material'
import Button from '../common/button/Button'

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  img {
    margin-bottom: 16px;
  }
`

export const FormStyled = styled(props => <CardContent {...props}/>)`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 0;
`

export const CardActionsStyled = styled(CardActions)`
  justify-content: center;
  column-gap: 1rem;
  padding-bottom: 0;
`

export const ButtonStyled = styled(props => <Button {...props}/>)`
  border: 1px solid #000 !important;
`
