import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

export type Auth = {
  uid: string | null,
  name: string | null,
}

interface AuthState {
  auth: Auth | null,
  signedIn: boolean,
}

const initialState: AuthState = {
  auth: null,
  signedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
      state.signedIn = (state.auth !== null);
    },
  },
});

export const { authenticate } = authSlice.actions;

export const getAuth = (state: RootState) => state.auth.auth;
export const getIsSignedIn = (state: RootState) => state.auth.signedIn;

export const authenticateAsync = (auth: Auth): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(authenticate(auth));
  }, 1000);
};

export default authSlice.reducer;
