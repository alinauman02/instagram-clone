import { useState } from 'react';

import { useGetProfileByUsernameQuery } from 'apis';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import ProfilePic from 'assets/images/profile.jpeg';
import { CreatePost, Gallery, Header } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUsername, useAppSelector } from 'store';
import './Profile.css';

const { posts, followers, following } = {
  followers: 235,
  posts: 21,
  following: 352,
};

export function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();

  const currentUsername: string = useAppSelector(selectUsername);

  const { data: profile } = useGetProfileByUsernameQuery(username as string);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

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
              {currentUsername === username && (
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
              )}
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
              <div className="name">{profile?.name}</div>
              <div className="bio">{profile?.bio}</div>
            </div>
          </div>
        </header>
        <Gallery />
      </div>
    </div>
  );
}
