import { useEffect, useState } from 'react';

import './EditProfile.css';
import Profile from 'assets/images/profile.jpeg';
import { Input } from './Input';
import EditPhoto from './EditPhoto';
import { useGetProfileByIdQuery } from 'apis/create-api';
import { UserProfile } from 'models';

export function EditProfile() {
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);
  const res = useGetProfileByIdQuery('vmOLhfitAA8fFxbp36Cf2F222fxr');
  const [profileInfo, setProfileInfo] = useState<UserProfile>({
    name: '',
    bio: '',
    email: '',
    username: '',
    gender: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (res.currentData !== undefined) {
      setProfileInfo(res.currentData);
    }
  }, [res]);

  const profileName = 'Ejaz Hussain';

  const count = profileInfo.bio.length;

  console.log(res.currentData);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setProfileInfo(currentProfileInfo => ({ ...currentProfileInfo, [name]: value }));
  };

  const onChangeField = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setProfileInfo(currentProfileInfo => ({
      ...currentProfileInfo,
      [name]: value.length < 150 ? value : value.substring(0, 150),
    }));
  };

  const canSubmit =
    profileInfo.phoneNumber !== '' &&
    profileInfo.username !== '' &&
    profileInfo.email !== '' &&
    profileInfo.name !== '';

  return (
    <div className="edit-profile flex-box flex-direction-column">
      <div className="flex-box profile-settings-header">
        <img className="profile-image-icon" src={Profile} alt="No Imag"></img>
        <div>
          <h3>{profileName}</h3>

          <button className="edit-profile-picture" onClick={() => setShowEditPhotoModal(modal => !modal)}>
            edit profile icon
          </button>
          {showEditPhotoModal && <EditPhoto profilePic={Profile} setShowEditPhotoModal={setShowEditPhotoModal} />}
        </div>
      </div>
      <form className="edit-profile-form">
        <Input label="Name" type="string" placeholder="Name" name="name" value={profileInfo.name} onChange={onChange} />
        <Input
          type="string"
          placeholder="Username"
          name="username"
          onChange={onChange}
          value={profileInfo.username}
          label="Username"
        />
        <div className="flex-box">
          <span className="edit-profile-label">Bio</span>
          <textarea
            className="input-edit-textarea"
            placeholder="bio"
            name="bio"
            onInput={onChangeField}
            rows={3}
            maxLength={150}
            value={profileInfo.bio}
          ></textarea>
        </div>
        <span className="bio-chars-count">{count}/150</span>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={profileInfo.email}
          label="Email"
        />
        <Input
          type="number"
          placeholder="Phone No"
          name="phoneno"
          onChange={onChange}
          value={profileInfo.phoneNumber}
          label="Phone Number"
        />
        <Input
          label="Gender"
          type="string"
          placeholder="Gender"
          name="gender"
          onChange={onChange}
          value={profileInfo.gender}
        />
        <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
