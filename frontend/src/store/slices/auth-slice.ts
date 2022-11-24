import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface AuthState {
  id: string;
  token: string;
}

const initialState: AuthState = { id: '', token: '' };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<AuthState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
  },
});

export const selectUserId = (state: RootState) => state.auth.id;
export const selectUserToken = (state: RootState) => state.auth.token;

export const { setAuthState } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
