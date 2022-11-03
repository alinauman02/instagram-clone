import { useState } from 'react';
import { Link } from 'react-router-dom';

import './EditPassword.css';
import Profile from 'assets/images/profile.jpeg';
import { Input } from './Input';

export function EditPassword() {
  const [accountPassword, setAccountPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAccountPassword(currentProfileInfo => ({ ...currentProfileInfo, [name]: value }));
  };

  const canConfirm =
    accountPassword.newPassword !== '' && accountPassword.confirmPassword !== '' && accountPassword.oldPassword !== '';

  return (
    <div className="settings">
      <div className="setting-card flex-box">
        <div className="settings-sidebar flex-box flex-direction-column">
          <Link className="edit-buttons " to="/settings/editprofile">
            Edit profile
          </Link>
          <Link className="edit-selected-button " to="/settings/changepassword">
            Change password
          </Link>
        </div>
        <div className="edit-profile flex-box flex-direction-column">
          <div className="flex-box password-settings-header">
            <img className="password-image-icon" src={Profile} alt="kjsaf"></img>
            <div>
              <h3 className="profile-text-name">Ejaz Hussain</h3>
            </div>
          </div>
          <form className="edit-password-form">
            <div className="flex-box">
              <span className="edit-password-label">Password</span>
              <Input type="password" placeholder="Password" name="oldPassword" onChange={onChange} />
            </div>
            <div className="flex-box">
              <span className="edit-password-label">New Password</span>
              <Input type="password" placeholder="New Password" name="newPassword" onChange={onChange} />
            </div>

            <div className="flex-box">
              <span className="edit-password-label">Confirm Password</span>
              <Input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={onChange} />
            </div>

            <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canConfirm}>
              Confirm
            </button>
          </form>
          <button className="edit-forgot-password">Forgot password?</button>
        </div>
      </div>
    </div>
  );
}
