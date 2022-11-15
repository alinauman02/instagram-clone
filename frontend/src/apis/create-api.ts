import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'models';

enum ApiTag {
  PROFILE = 'Profile',
}
export interface Post {
  id: string;
  profile: UserProfile;
}

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3002/aurora-instagram-clone/us-central1/api' }),
  tagTypes: [ApiTag.PROFILE],
  endpoints: builder => ({
    getProfileById: builder.query<UserProfile, string>({
      query: id => `/user-profiles/${id}`,
      providesTags: [ApiTag.PROFILE],
    }),
    updateProfileById: builder.mutation<UserProfile, Post>({
      query: ({ id, profile }) => ({
        url: `/user-profiles/${id}`,
        method: 'PATCH',
        body: profile,
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
  }),
});

export const { useGetProfileByIdQuery, useUpdateProfileByIdMutation } = api;
