import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'models';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3002/aurora-instagram-clone/us-central1/api/profile/' }),
  endpoints: builder => ({
    getProfileById: builder.query<UserProfile, string>({
      query: id => `${id}`,
    }),
  }),
});

export const { useGetProfileByIdQuery } = api;
