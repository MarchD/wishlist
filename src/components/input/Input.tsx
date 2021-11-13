import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'

const Input: FC<TextFieldProps> = (props) => {
    return (
        <TextField
            fullWidth
            {...props}
        />
    )
}

export default Input