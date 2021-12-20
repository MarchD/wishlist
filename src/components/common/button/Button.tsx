import React, { FC } from 'react'
import { ButtonProps } from '@mui/material'
import { Button as ButtonMaterial } from '@mui/material'
import styles from './Button.module.scss'
import classNames from 'classnames'

const Button: FC<ButtonProps> = ({children, variant = 'text', ...props}) => {

    return <ButtonMaterial
        {...props}
        variant={variant}
        className={classNames(styles.button, styles[variant])}
    >
        {children}
    </ButtonMaterial>
}

export default Button
