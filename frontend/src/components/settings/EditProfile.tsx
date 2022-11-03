import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="settings">
      <div className="setting-card flex-box">
        <div className="settings-sidebar flex-box flex-direction-column">
          <Link className="edit-selected-button" to="/settings/editprofile">
            Edit profile
          </Link>
          <Link className="edit-buttons" to="/settings/changepassword">
            Change password
          </Link>
        </div>
        <div className="edit-profile flex-box flex-direction-column">
          <div className="flex-box profile-settings-header">
            <img className="profile-image-icon" src={Profile} alt="kjsaf"></img>
            <div>
              <h3>Ejaz Hussain</h3>
              <button className="edit-profile-picture" onClick={() => setShowEditPhotoModal(modal => !modal)}>
                edit profile icon
              </button>
              {showEditPhotoModal && <EditPhoto profilePic={Profile} setShowEditPhotoModal={setShowEditPhotoModal} />}
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
              <textarea
                className="input-edit-textarea"
                placeholder="bio"
                name="bio"
                onInput={onChangeField}
                rows={2}
              ></textarea>
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
      </div>
    </div>
  );
}
