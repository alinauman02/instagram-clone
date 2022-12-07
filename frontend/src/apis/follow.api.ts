import { UserProfile } from 'models';
import { emptyApi } from '.';

export enum ApiTag {
  PROFILE = 'Profile',
}

const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: [ApiTag.PROFILE] });
const followersAPi = apiWithTag.injectEndpoints({
  endpoints: builder => ({
    getFollowers: builder.query<UserProfile, string>({
      query: username => `/follow/followed-by-user-profiles/${username}`,
      providesTags: [ApiTag.PROFILE],
    }),
    getFollowings: builder.query<UserProfile, string>({
      query: username => `/follow/following-user-profiles/${username}`,
      providesTags: [ApiTag.PROFILE],
    }),
    followUserProfile: builder.mutation<UserProfile, string>({
      query: username => ({
        url: `/follow/follow-user-profile/${username}`,
        method: 'PATCH',
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
    unFollowUserProfile: builder.mutation<UserProfile, string>({
      query: username => ({
        url: `/follow/unfollow-user-profile/${username}`,
        method: 'PATCH',
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetFollowersQuery,
  useGetFollowingsQuery,
  useUnFollowUserProfileMutation,
  useFollowUserProfileMutation,
} = followersAPi;
