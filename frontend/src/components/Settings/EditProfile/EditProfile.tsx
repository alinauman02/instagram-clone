import { useEffect, useState } from 'react';

import { useGetProfileByUsernameQuery, useUpdateProfileByIdMutation } from 'apis';
import Profile from 'assets/images/profile.jpeg';
import { EditPhoto, InputField, SelectField } from 'components';
import { UserProfile } from 'models';
import { selectUserId, selectUsername, useAppSelector } from 'store';
import './EditProfile.css';

export function EditProfile() {
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);
  const username = useAppSelector(selectUsername);
  const id = useAppSelector(selectUserId);
  const { data, isFetching } = useGetProfileByUsernameQuery(username);
  const [error, setError] = useState('');
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
    try {
      setError('');
      event.preventDefault();
      const editProfilePlayload = { ...profileInfo };
      if (profileInfo.phoneNumber === '') editProfilePlayload.phoneNumber = undefined;
      const res = await updateProfileMutation({ id, profile: editProfilePlayload });
      if (res.error) throw new Error(res.error.data.error);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
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

  const onChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const onChangeField = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setError('');
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
            value={profileInfo.bio}
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
          value={profileInfo.phoneNumber ?? ''}
          label="Phone Number"
        />
        <SelectField
          onChange={onChangeSelect}
          label="Gender"
          placeholder="Gender"
          name="gender"
          value={profileInfo.gender ?? ''}
          options={['male', 'female']}
        />

        <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canSubmit}>
          Submit
        </button>
        <div className="error-msg">{error}</div>
      </form>
    </div>
  );
}
