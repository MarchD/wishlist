import React, { FC } from 'react'
import { AvatarProps } from '@mui/material'
import { AvatarStyled } from './AvatarStyled'

const Avatar: FC<AvatarProps> = (props) => {
    return  <AvatarStyled {...props} />
}

export default Avatar
