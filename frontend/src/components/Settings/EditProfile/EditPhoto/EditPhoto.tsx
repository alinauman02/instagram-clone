import { useState } from 'react';
import './EditPhoto.css';

interface EditPhotoProps {
  profilePic: string;
  setShowEditPhotoModal: (show: boolean) => void;
}

export function EditPhoto({ profilePic, setShowEditPhotoModal }: EditPhotoProps) {
  const [profilePicture, setProfilePicture] = useState(profilePic);
  return (
    <div className="edit-photo-background">
      <div className="edit-photo flex-box flex-direction-column">
        {profilePicture === '' ? (
          <div className="profile-image-icon"></div>
        ) : (
          <img className="profile-image-icon" src={profilePicture} alt=""></img>
        )}

        <button className="upload-photo" onClick={() => setShowEditPhotoModal(false)}>
          Upload Picture
        </button>
        <button className="remove-photo" onClick={() => setProfilePicture('')}>
          Remove Picture
        </button>
      </div>
    </div>
  );
}
