import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ModalTypes } from '@Models/modal';
import { ModalChoosingGift } from './index';
import { openModal } from '../modal';

const initialState: ModalChoosingGift = { id: '' };

const slice = createSlice({
  name: 'choosingGiftModal',
  initialState,
  reducers: {
    chooseGift: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { chooseGift } = slice.actions;

export const chooseGiftAndOpenModal = (id: string) => async (dispatch: Dispatch) => {
  await dispatch(openModal(ModalTypes.CHOOSE_GIFT));
  return dispatch(chooseGift(id));
};

export const choosingGiftModal = slice.reducer;
