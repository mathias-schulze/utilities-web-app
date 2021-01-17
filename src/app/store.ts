import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import readingsReducer from '../features/readingsSlice';
import authReducer from '../app/authSlice';

export const store = configureStore({
  reducer: {
    readings: readingsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
