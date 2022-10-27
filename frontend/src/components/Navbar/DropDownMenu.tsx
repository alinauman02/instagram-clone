import { Link, useNavigate } from 'react-router-dom';

import './DropDownMenu.css';

import { ReactComponent as SavedIcon } from 'assets/icons/saved.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg';
import { ReactComponent as SwitchAccountIcon } from 'assets/icons/switch-accounts.svg';
import { ReactComponent as ReportProblemIcon } from 'assets/icons/report-problem.svg';
import { logOut } from 'services/auth';
import { FirebaseError } from 'firebase/app';

export default function DropDownMenu() {
  const navigate = useNavigate();
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
          <button
            className="list-button"
            onClick={() => {
              try {
                logOut();
                navigate('/login');
              } catch (err) {
                if (err instanceof FirebaseError) {
                  console.log(err);
                }
              }
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
