import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modal } from '../features/modal';
import { choosingGiftModal } from '../features/choose-gift';

const rootReducers = combineReducers({
  modal,
  choosingGiftModal,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type StateSelector<TResult> = (state: RootState) => TResult;
