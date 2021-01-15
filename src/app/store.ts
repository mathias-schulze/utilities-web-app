import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import readingsReducer from '../features/readingsSlice';

export const store = configureStore({
  reducer: {
    readings: readingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
