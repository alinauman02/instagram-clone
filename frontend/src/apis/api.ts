import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'models';
import { RootState } from 'store';

export const urlString = import.meta.env.VITE_APP_FIREBASE_ROUTE_URL;

export interface PostProfile {
  id: string;
  profile: UserProfile;
}

export interface followAccount {
  uid: string;
  name: string;
  username: string;
  id:string;
}

// Define a service using a base URL and expected endpoints
export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: urlString,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
