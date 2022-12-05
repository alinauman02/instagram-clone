import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface AuthState {
  id: string;
  token: string;
  username: string;
}

const initialState: AuthState = { id: '', token: '', username: '' };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<AuthState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const selectUserId = (state: RootState) => state.auth.id;
export const selectUserToken = (state: RootState) => state.auth.token;
export const selectUsername = (state: RootState) => state.auth.username;

export const { setAuthState } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
