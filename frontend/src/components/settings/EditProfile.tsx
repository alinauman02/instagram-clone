import { useEffect, useState } from 'react';

import './EditProfile.css';
import Profile from 'assets/images/profile.jpeg';
import { Input } from './Input';
import EditPhoto from './EditPhoto';
import { UserProfile } from 'models';
import { useGetProfileByIdQuery, useUpdateProfileByIdMutation } from 'apis/create-api';

export function EditProfile() {
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);
  const { data, isFetching } = useGetProfileByIdQuery('eYKLJ2PJhU0cFaO5EzCrIbiTwqDj');

  const [profileInfo, setProfileInfo] = useState<UserProfile>({
    name: '',
    bio: '',
    email: '',
    username: '',
    gender: '',
    phoneNumber: '',
  });
  const [updateProfileMutation] = useUpdateProfileByIdMutation();

  const updateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = updateProfileMutation({ id: 'eYKLJ2PJhU0cFaO5EzCrIbiTwqDj', profile: profileInfo });
    console.log(res);
  };

  const profileName = 'Ejaz Hussain';
  let count = 0;
  let canSubmit = false;

  profileInfo
    ? ((count = profileInfo.bio.length),
      (canSubmit =
        profileInfo.phoneNumber !== '' &&
        profileInfo.username !== '' &&
        profileInfo.email !== '' &&
        profileInfo.name !== ''))
    : ((count = 0), (canSubmit = false));

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const onChangeField = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  useEffect(() => {
    data !== undefined ? setProfileInfo(data) : setProfileInfo(profileInfo);
  }, [data, isFetching]);

  return isFetching || !profileInfo ? (
    <div>Loading</div>
  ) : (
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
      <form className="edit-profile-form" onSubmit={updateProfile}>
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
            value={profileInfo.bio ? profileInfo.bio : ''}
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
          name="phoneNumber"
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
