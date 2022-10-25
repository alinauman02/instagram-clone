import { Link } from 'react-router-dom';

import './DropDownMenu.css';

import { ReactComponent as SavedIcon } from 'assets/icons/saved.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg';
import { ReactComponent as SwitchAccountIcon } from 'assets/icons/switch-accounts.svg';
import { ReactComponent as ReportProblemIcon } from 'assets/icons/report-problem.svg';

export default function DropDownMenu() {
  return (
    <div className="navbar-dropdown">
      <ul className="dropdown-list">
        <li className="dropdown-list-item">
          <Link className="list-link flex-box" to="/profile">
            <div className="icon-div">
              <ProfileIcon />
            </div>
            Profile
          </Link>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <SavedIcon />
            </div>
            Saved
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <SettingsIcon />
            </div>{' '}
            Settings
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <ReportProblemIcon />
            </div>
            Report a problem
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              {' '}
              <SwitchAccountIcon />
            </div>
            Switch accounts
          </button>
        </li>
        <li className="dropdown-list-item last-dropdown-list-item">
          <Link className="list-link" to="/login">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
