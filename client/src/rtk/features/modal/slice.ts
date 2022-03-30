import { createSlice } from '@reduxjs/toolkit';
import { modalState } from './types';

const initialState: modalState = { isOpen: false, type: null };

export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { closeModal, openModal } = slice.actions;
export const modal = slice.reducer;
