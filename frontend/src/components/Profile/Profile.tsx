import './Profile.css';

import { ReactComponent as IconInstagram } from 'assets/icons/instagram-icon.svg';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';

export function Profile() {
  return (
    <div className="profile">
      <header className="profile-header flex-box">
        <div className="profile-pic">
          <IconInstagram />
        </div>
        <div className="bio">
          <div className="flex-box">
            <div className="user-name">ejazbala028</div>
            <button className="edit-profile-button">Edit Profile</button>
            <div>
              <button className="settings-profile-button">
                <IconSettings />
              </button>
            </div>
          </div>
          <div className="profile-info">
            <span className="counts">21 posts</span>{' '}
            <span className="counts">
              268<button className="followers-button"> followers</button>
            </span>
            <span className="counts">
              274 <button className="following-button"> following</button>
            </span>
          </div>
          <div className="profile-bio">
            <div className="name">Ejaz Baltistani</div>
            <div className="bio">Quaindian</div>
          </div>
        </div>
      </header>
    </div>
  );
}
