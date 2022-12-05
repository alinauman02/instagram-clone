import { UserProfile } from 'models';
import { emptyApi, PostProfile } from '.';

export enum ApiTag {
  PROFILE = 'Profile',
}

const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: [ApiTag.PROFILE] });
const profileApi = apiWithTag.injectEndpoints({
  endpoints: builder => ({
    getProfileById: builder.query<UserProfile, string>({
      query: id => `/user-profiles/${id}`,
      providesTags: [ApiTag.PROFILE],
    }),
    getProfileByUsername: builder.query<UserProfile, string>({
      query: username => `/user-profiles/username/${username}`,
      providesTags: [ApiTag.PROFILE],
    }),
    updateProfileById: builder.mutation<UserProfile, PostProfile>({
      query: ({ id, profile }) => ({
        url: `/user-profiles/${id}`,
        method: 'PATCH',
        body: profile,
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileByUsernameQuery, useGetProfileByIdQuery, useUpdateProfileByIdMutation } = profileApi;
