import { useState } from 'react';

import { useGetProfileByUsernameQuery } from 'apis';
import { useFollowUserProfileMutation } from 'apis/follow.api';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import ProfilePic from 'assets/images/profile.jpeg';
import { CreatePost, Gallery, Header, ProfileList } from 'components';
import { FollowProfile } from 'models/follow-profile';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUsername, useAppSelector } from 'store';
import './Profile.css';

const { posts } = {
  posts: 21,
};

export function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();

  const currentUsername: string = useAppSelector(selectUsername);

  const { data: profile } = useGetProfileByUsernameQuery(username as string);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const [showFollowerListModal, setShowFollowerListModal] = useState(false);

  const [showFollowingListModal, setShowFollowingListModal] = useState(false);

  const [FollowProfile] = useFollowUserProfileMutation();

  let checkFollowings = false;
  if (profile?.followers) {
    const temp: FollowProfile[] = profile?.followers;
    for (let i = 0; i < temp.length; i++) if (temp[i].username === currentUsername) checkFollowings = true;
  }

  const onCheckFollowers = () => {
    setShowFollowerListModal(true);
  };

  const onCheckFollowings = () => {
    setShowFollowingListModal(true);
  };
  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBoxVisibility={setShowCreatePostModal} />}
      <div className="profile">
        <header className="profile-header flex-box">
          <img className="profile-pic" src={ProfilePic} alt="profile"></img>

          <div className="bio">
            <div className="flex-box">
              <div className="user-name">{profile?.username}</div>
              {currentUsername === username ? (
                <>
                  <button className="edit-profile-button" onClick={() => navigate('/settings/edit-profile')}>
                    Edit Profile
                  </button>
                  <div>
                    <button className="settings-profile-button" onClick={() => navigate('/settings/edit-profile')}>
                      <IconSettings />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {checkFollowings ? (
                    <button className="follow-profile-button-following">Following</button>
                  ) : (
                    <button
                      className="follow-profile-button-follow"
                      onClick={async () => {
                        await FollowProfile(username ?? '');
                      }}
                    >
                      Follow
                    </button>
                  )}
                </>
              )}
            </div>
            <div className="profile-info">
              <span className="counts">{posts} posts</span>
              <span className="counts">
                {profile?.followers?.length ?? 0}
                <button className="followers-button" onClick={onCheckFollowers}>
                  followers
                </button>
              </span>
              <span className="counts">
                {profile?.followings?.length ?? 0}
                <button className="following-button" onClick={onCheckFollowings}>
                  following
                </button>
              </span>
            </div>
            <div className="profile-bio">
              <div className="name">{profile?.name}</div>
              <div className="bio">{profile?.bio}</div>
            </div>
          </div>
        </header>
        <Gallery />
      </div>
      {showFollowerListModal && profile?.followers && (
        <ProfileList
          profileLists={profile?.followers ?? []}
          list="followers"
          type={currentUsername === username ? 'self' : 'others'}
        />
      )}
      {showFollowingListModal && profile?.followings && (
        <ProfileList
          profileLists={profile?.followings ?? []}
          list="followings"
          type={currentUsername === username ? 'self' : 'others'}
        />
      )}
    </div>
  );
}
