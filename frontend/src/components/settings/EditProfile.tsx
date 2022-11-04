import { useState } from 'react';

import './EditProfile.css';
import Profile from 'assets/images/profile.jpeg';
import { Input } from './Input';
import EditPhoto from './EditPhoto';

export function EditProfile() {
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);

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

  const onChangeField = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setProfileInfo(currentProfileInfo => ({ ...currentProfileInfo, [name]: value }));
  };

  const canSubmit =
    profileInfo.phoneno !== '' && profileInfo.username !== '' && profileInfo.email !== '' && profileInfo.name !== '';

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
          <Input type="string" placeholder="Name" name="name" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Username</span>
          <Input type="string" placeholder="Username" name="username" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Bio</span>
          <Input type="string" placeholder="bio" name="bio" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Email</span>
          <Input type="email" placeholder="Email" name="email" onChange={onChange} />
        </div>
        <div className="flex-box">
          <span className="edit-profile-label">Phone number</span>
          <Input type="number" placeholder="Phone No" name="phoneno" onChange={onChange} />
        </div>

        <div className="flex-box">
          <span className="edit-profile-label">Gender</span>
          <Input type="string" placeholder="Gender" name="gender" onChange={onChange} />
        </div>
        <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
