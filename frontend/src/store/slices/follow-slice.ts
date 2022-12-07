import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FollowProfile } from 'models/follow-profile';
import { RootState } from 'store';

interface FollowState {
  followers: FollowProfile[];
  followings: FollowProfile[];
}

const initialState: FollowState = { followers: [], followings: [] };

export const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
    setFollowStates(state, action: PayloadAction<FollowState>) {
      state.followers = action.payload.followers;
      state.followings = action.payload.followings;
    },

    setFollowersState(state, action: PayloadAction<FollowProfile[]>) {
      state.followers = action.payload;
    },
    setFollowingsState(state, action: PayloadAction<FollowProfile[]>) {
      state.followings = action.payload;
    },
  },
});

export const selectFollowers = (state: RootState) => state.follow;
export const selectFollowings = (state: RootState) => state.auth.token;

export const { setFollowersState, setFollowStates, setFollowingsState } = followSlice.actions;
export const followSliceReducer = followSlice.reducer;
