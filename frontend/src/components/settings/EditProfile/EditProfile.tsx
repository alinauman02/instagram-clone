import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetProfileByIdQuery, useUpdateProfileByIdMutation } from 'apis/create-api';
import Profile from 'assets/images/profile.jpeg';
import { EditPhoto, InputField } from 'components';
import { UserProfile } from 'models';
import { selectUserId, useAppSelector } from 'store';
import './EditProfile.css';

export function EditProfile() {
  const navigate = useNavigate();
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);
  const id = useAppSelector(selectUserId);
  const { data, isFetching } = useGetProfileByIdQuery(id);
  const [profileInfo, setProfileInfo] = useState<UserProfile>({
    name: '',
    bio: '',
    email: '',
    username: '',
    gender: '',
    phoneNumber: '',
  });
  const [updateProfileMutation] = useUpdateProfileByIdMutation();

  const updateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await updateProfileMutation({ id, profile: profileInfo });
    console.log(res);
    navigate('/profile');
  };

  const profileName = 'Ejaz Hussain';
  let count = 0;
  let canSubmit = false;

  profileInfo
    ? ((count = profileInfo.bio.length),
      (canSubmit = profileInfo.username !== '' && profileInfo.email !== '' && profileInfo.name !== ''))
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
    if (data) setProfileInfo(data);
  }, [data]);

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
        <InputField
          label="Name"
          type="string"
          placeholder="Name"
          name="name"
          value={profileInfo.name}
          onChange={onChange}
        />
        <InputField
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
            value={profileInfo.bio ?? ''}
          ></textarea>
        </div>
        <span className="bio-chars-count">{count}/150</span>
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={profileInfo.email}
          label="Email"
        />
        <InputField
          type="number"
          placeholder="Phone No"
          name="phoneNumber"
          onChange={onChange}
          value={profileInfo.phoneNumber}
          label="Phone Number"
        />
        <InputField
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
