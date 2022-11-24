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
    updateProfileById: builder.mutation<UserProfile, PostProfile>({
      query: ({ token, id, profile }) => ({
        url: `/user-profiles/${id}`,
        method: 'PATCH',
        body: profile,
        headers: {
          Authorization: `${token}`,
        },
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileByIdQuery, useUpdateProfileByIdMutation } = profileApi;
