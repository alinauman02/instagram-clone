import './Profile.css';
import ProfilePic from 'assets/images/profile.jpeg';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import { Gallery } from 'components';

const { name, username, bio, posts, followers, following } = {
  name: 'Ejaz hussain',
  username: 'ejazhussain1050',
  bio: 'Do it your self',
  followers: 235,
  posts: 21,
  following: 352,
};

export function Profile() {
  return (
    <div className="profile">
      <header className="profile-header flex-box">
        <img className="profile-pic" src={ProfilePic} alt="profile"></img>
        <div className="bio">
          <div className="flex-box">
            <div className="user-name">{username}</div>
            <button className="edit-profile-button">Edit Profile</button>
            <div>
              <button className="settings-profile-button">
                <IconSettings />
              </button>
            </div>
          </div>
          <div className="profile-info">
            <span className="counts">{posts} posts</span>
            <span className="counts">
              {followers}
              <button className="followers-button"> followers</button>
            </span>
            <span className="counts">
              {following} <button className="following-button"> following</button>
            </span>
          </div>
          <div className="profile-bio">
            <div className="name">{name}</div>
            <div className="bio">{bio}</div>
          </div>
        </div>
      </header>
      <Gallery />
    </div>
  );
}
