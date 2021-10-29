import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (args, thunkAPI) => {
        console.log(args)
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        }  catch (e) {
            return thunkAPI.rejectWithValue('Неудача :(')
        }
    }
)