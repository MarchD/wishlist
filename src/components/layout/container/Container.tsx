import React, { FC } from 'react'
import { ContainerProps } from 'src/models/container'
import { Container as ContainerMaterial} from '@mui/material'
import styles from './Container.module.scss'

const Container: FC<ContainerProps> = ({size, children}) => {
    return (
        <ContainerMaterial maxWidth={size} className={styles.container} >
            {children}
        </ContainerMaterial>
    )
}

export default Container
