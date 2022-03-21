import { createSelector } from '@reduxjs/toolkit';
import { RootState, StateSelector } from 'src/rtk/app/store';
import { GiftId } from './types';

export const getChooseGiftState = (state: RootState) => state.choosingGiftModal;

export const getChosenGift: StateSelector<GiftId> = createSelector(
  getChooseGiftState,
  (choosingGiftState) => choosingGiftState.id
);
