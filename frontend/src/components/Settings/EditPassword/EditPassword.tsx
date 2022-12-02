import { useState } from 'react';

import Profile from 'assets/images/profile.jpeg';
import { InputField } from 'components';
import './EditPassword.css';

export function EditPassword() {
  const [accountPassword, setAccountPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setAccountPassword(currentProfileInfo => ({ ...currentProfileInfo, [name]: value }));
  };

  const canConfirm =
    accountPassword.newPassword !== '' && accountPassword.confirmPassword !== '' && accountPassword.oldPassword !== '';

  return (
    <div className="edit-profile flex-box flex-direction-column">
      <div className="flex-box password-settings-header">
        <img className="password-image-icon" src={Profile} alt="kjsaf"></img>
        <div>
          <h3 className="profile-text-name">Ejaz Hussain</h3>
        </div>
      </div>
      <form className="edit-password-form">
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          name="oldPassword"
          onChange={onChange}
          value={accountPassword.oldPassword}
        />
        <InputField
          label="New Password"
          type="password"
          placeholder="New Password"
          name="newPassword"
          onChange={onChange}
          value={accountPassword.newPassword}
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={onChange}
          value={accountPassword.confirmPassword}
        />
        <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canConfirm}>
          Confirm
        </button>
      </form>
      <button className="edit-forgot-password">Forgot password?</button>
    </div>
  );
}
