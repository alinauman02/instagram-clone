import { NavLink, Outlet } from 'react-router-dom';

import './Settings.css';
export function Settings() {
  const selectedNav = 'selected-nav edit-buttons';
  const notSelectedNav = 'edit-buttons';

  return (
    <div className="settings">
      <div className="setting-card flex-box">
        <div className="settings-sidebar flex-box flex-direction-column">
          <NavLink to="edit-profile" className={({ isActive }) => (isActive ? selectedNav : notSelectedNav)}>
            Edit profile
          </NavLink>
          <NavLink to="change-password" className={({ isActive }) => (isActive ? selectedNav : notSelectedNav)}>
            Change password
          </NavLink>
          <NavLink to="/home" className={({ isActive }) => (isActive ? selectedNav : notSelectedNav)}>
            Back
          </NavLink>
        </div>
        <div className="edit-form">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
