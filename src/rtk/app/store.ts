import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modal from '../features/modalSlice';

const rootReducers = combineReducers({
  modal,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
