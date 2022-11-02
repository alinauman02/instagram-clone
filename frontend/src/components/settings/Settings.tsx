import { useState } from 'react';
import './Settings.css';

import { EditProfile } from './EditProfile';
import { EditPassword } from './EditPassword';
export function Settings() {
  const [selectedEditMode, setSelectedEditMode] = useState<'Password' | 'Profile'>('Profile');
  let editPasswordSelected = '';
  let editProfileSelected = '';
  selectedEditMode == 'Password' ? (editPasswordSelected = 'selected-mode') : (editProfileSelected = 'selected-mode');

  return (
    <div className="settings flex-box">
      <div className="settings-sidebar flex-box flex-direction-column">
        <button className={'edit-buttons ' + editProfileSelected} onClick={() => setSelectedEditMode('Profile')}>
          Edit profile
        </button>
        <button className={'edit-buttons ' + editPasswordSelected} onClick={() => setSelectedEditMode('Password')}>
          Change password
        </button>
      </div>
      <div className="edit-form">{selectedEditMode == 'Password' ? <EditPassword /> : <EditProfile />}</div>
    </div>
  );
}
