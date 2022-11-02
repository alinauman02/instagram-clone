import { ProfileListItem } from 'components/ProfileListItem/ProfileListItem';
import { useState } from 'react';
import './EditProfile.css';

import Profile from 'assets/images/profile.jpeg';
import { Input } from './Input';
import { current } from '@reduxjs/toolkit';

export function EditProfile() {
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    username: '',
    bio: '',
    email: '',
    phoneno: '',
    gender: '',
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    
    const { name, value } = e.currentTarget;
    setProfileInfo(currentProfileInfo => ({ ...currentProfileInfo, [name]: value }));
  };

  return (
    <div className="edit-profile flex-box flex-direction-column">
      <div className="flex-box profile-settings-header">
        <img className="profile-image-icon" src={Profile} alt="kjsaf"></img>
        <div>
          <h3>Ejaz Hussain</h3>
          <button className="edit-profile-picture">edit profile icon</button>
        </div>
      </div>
      <form className="edit-profile-form">
        <div className="flex-box">
          <span className="edit-profile-label">Name</span>
          <Input type="string" placeholder="Mobile Number or Email" name="name" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Username</span>
          <Input type="string" placeholder="Mobile Number or Email" name="username" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Bio</span>
          <Input type="string" placeholder="Mobile Number or Email" name="bio" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Email</span>
          <Input type="string" placeholder="Mobile Number or Email" name="email" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Phone number</span>
          <Input type="string" placeholder="Mobile Number or Email" name="phoneno" onChange={onChange} />
        </div>

        <div className="flex-box">
          <span className="edit-profile-label">Gender</span>
          <Input type="string" placeholder="Mobile Number or Email" name="gender" onChange={onChange} />
        </div>
        <button type="submit" className="edit-submit" id="submit">
          submit
        </button>
      </form>
    </div>
  );
}
