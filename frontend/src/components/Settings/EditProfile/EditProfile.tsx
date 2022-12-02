import { useEffect, useState } from 'react';

import { useGetProfileByIdQuery, useUpdateProfileByIdMutation } from 'apis';
import Profile from 'assets/images/profile.jpeg';
import { EditPhoto, InputField, SelectField } from 'components';
import { Gender, UserProfile } from 'models';
import { selectUserId, useAppSelector } from 'store';
import './EditProfile.css';

export function EditProfile() {
  const [showEditPhotoModal, setShowEditPhotoModal] = useState(false);
  const id = useAppSelector(selectUserId);
  const { data: profile, isFetching } = useGetProfileByIdQuery(id);
  const [errorMessage, setErrorMessage] = useState('');
  const [profileForm, setProfileForm] = useState<UserProfile>({
    name: '',
    bio: '',
    email: '',
    username: '',
    phoneNumber: '',
    gender: Gender.MALE,
  });
  const [updateProfileMutation] = useUpdateProfileByIdMutation();

  const updateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage('');
    event.preventDefault();
    const editProfilePlayload = { ...profileForm };
    if (profileForm.phoneNumber === '') editProfilePlayload.phoneNumber = undefined;
    updateProfileMutation({ id, profile: editProfilePlayload })
      .unwrap()
      .catch(error => {
        setErrorMessage(error.data.error);
      });
  };

  let count = 0;
  let canSubmit = false;

  if (profileForm) {
    count = profileForm.bio.length;
    canSubmit = profileForm.username !== '' && profileForm.email !== '' && profileForm.name !== '';
  } else {
    count = 0;
    canSubmit = false;
  }

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const onChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const onChangeField = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setErrorMessage('');
    const { name, value } = event.currentTarget;
    setProfileForm({ ...profileForm, [name]: value });
  };

  useEffect(() => {
    if (profile) setProfileForm(currentProfileInfo => ({ ...currentProfileInfo, ...profile }));
  }, [profile]);

  return isFetching || !profileForm ? (
    <div>Loading</div>
  ) : (
    <div className="edit-profile flex-box flex-direction-column">
      <div className="flex-box profile-settings-header">
        <img className="profile-image-icon" src={Profile} alt="No Imag"></img>
        <div>
          <h3>{profile?.name}</h3>

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
          value={profileForm.name}
          onChange={onChange}
        />
        <InputField
          type="string"
          placeholder="Username"
          name="username"
          onChange={onChange}
          value={profileForm.username}
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
            value={profileForm.bio}
          ></textarea>
        </div>
        <span className="bio-chars-count">{count}/150</span>
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={profileForm.email}
          label="Email"
        />
        <InputField
          type="number"
          placeholder="Phone No"
          name="phoneNumber"
          onChange={onChange}
          value={profileForm.phoneNumber as string}
          label="Phone Number"
        />
        <SelectField
          onChange={onChangeSelect}
          label="Gender"
          placeholder="Gender"
          name="gender"
          value={profileForm.gender}
          options={[Gender.MALE, Gender.FEMALE]}
        />

        <button className="edit-submit" name="Sign up" value="Sign up" disabled={!canSubmit}>
          Submit
        </button>
        <div className="error-msg">{errorMessage}</div>
      </form>
    </div>
  );
}
