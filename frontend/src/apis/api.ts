import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'models';

export const urlString = import.meta.env.VITE_APP_ROUTE_URL;

export interface PostProfile {
  id: string;
  profile: UserProfile;
}

// Define a service using a base URL and expected endpoints
export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: urlString }),
  endpoints: () => ({}),
});
