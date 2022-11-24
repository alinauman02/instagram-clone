import { useEffect, useState } from 'react';

import './Profile.css';
import ProfilePic from 'assets/images/profile.jpeg';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import { CreatePost, Gallery, Header } from 'components';
import { useGetProfileByIdQuery } from 'apis/create-api';
import { useNavigate } from 'react-router-dom';
import { selectUserId, useAppSelector } from 'store';

const { posts, followers, following } = {
  followers: 235,
  posts: 21,
  following: 352,
};

export function Profile() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const id = useAppSelector(selectUserId);
  const { data } = useGetProfileByIdQuery(id);
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    bio: '',
    username: '',
    gender: '',
  });

  useEffect(() => {
    if (data) setProfileInfo(data);
  }, [data]);

  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBoxVisibility={setShowCreatePostModal} />}

      <div className="profile">
        <header className="profile-header flex-box">
          <img className="profile-pic" src={ProfilePic} alt="profile"></img>

          <div className="bio">
            <div className="flex-box">
              <div className="user-name">{profileInfo.username}</div>
              <button
                className="edit-profile-button"
                onClick={() => {
                  navigate('/settings/edit-profile');
                }}
              >
                Edit Profile
              </button>
              <div>
                <button
                  className="settings-profile-button"
                  onClick={() => {
                    navigate('/settings/edit-profile');
                  }}
                >
                  <IconSettings />
                </button>
              </div>
            </div>
            <div className="profile-info">
              <span className="counts">{posts} posts</span>{' '}
              <span className="counts">
                {followers}
                <button className="followers-button"> followers</button>
              </span>
              <span className="counts">
                {following} <button className="following-button"> following</button>
              </span>
            </div>
            <div className="profile-bio">
              <div className="name">{profileInfo.name}</div>
              <div className="bio">{profileInfo.bio}</div>
            </div>
          </div>
        </header>
        <Gallery />
      </div>
    </div>
  );
}
