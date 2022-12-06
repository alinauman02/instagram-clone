import { UserProfile } from 'models';
import { emptyApi, followAccount } from '.';

export enum ApiTag {
  PROFILE = 'Profile',
}

const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: [ApiTag.PROFILE] });
const followersAPi = apiWithTag.injectEndpoints({
  endpoints: builder => ({
    getFollowers: builder.query<UserProfile, string>({
      query: username => `/follower/followed-by-user-profiles/${username}`,
      providesTags: [ApiTag.PROFILE],
    }),
    getFollowings: builder.query<UserProfile, string>({
      query: username => `/follower/following-user-profiles/${username}`,
      providesTags: [ApiTag.PROFILE],
    }),
    followUserProfile: builder.mutation<UserProfile, followAccount>({
      query: ({ id, uid, name, username }) => ({
        url: `/follower/follow-user-profile${id}`,
        method: 'PATCH',
        body: { uid, name, username },
      }),
      invalidatesTags: [ApiTag.PROFILE],
    }),
    unFollowUserProfile: builder.mutation<UserProfile, string>({
      query: uid => ({
        url: `/follower/unfollow-user-profile${uid}`,
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
