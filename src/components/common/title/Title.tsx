import React, { FC } from 'react'
import { Typography } from '@mui/material'

const Title: FC = ({children}) => {
    return (
        <Typography variant="h6" gutterBottom component="p">
            {children}
        </Typography>
    )
}

export default Title
