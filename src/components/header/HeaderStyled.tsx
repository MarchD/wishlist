import styled from 'styled-components'
import { Button, Toolbar } from '@mui/material'
import React from 'react'

export const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between;
`

export const LinkStyled = styled((otherProps) => <Button {...otherProps} />)`
  color: #fff
`
