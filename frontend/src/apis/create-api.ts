import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'models';

export const urlString = 'http://127.0.0.1:3002/aurora-instagram-clone/us-central1/api/';

export interface PostProfile {
  id: string;
  profile: UserProfile;
}

// Define a service using a base URL and expected endpoints
export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: urlString }),
  endpoints: () => ({}),
});
