import React, { FC } from 'react'
import { AvatarProps } from '@mui/material'
import styles from './Avatar.module.scss'
import { Avatar as AvatarMaterial} from '@mui/material'

const Avatar: FC<AvatarProps> = (props) => {
    return  <AvatarMaterial {...props} className={styles.avatar} sx={{width: 150, height: 150}}/>
}

export default Avatar
