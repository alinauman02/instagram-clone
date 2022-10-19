import './Navbar.css';

import { ReactComponent as Add } from './../../assets/add.svg';
import { ReactComponent as Suggestions } from './../../assets/suggestions.svg';
import { ReactComponent as Home } from './../../assets/home.svg';
import { ReactComponent as Favorites } from './../../assets/favorites.svg';
import { ReactComponent as Messenger } from './../../assets/messenger.svg';
import { ReactComponent as SavedIcon } from './../../assets/saved.svg';
import { ReactComponent as SettingsIcon } from './../../assets/settings.svg';
import { ReactComponent as ReportProblemIcon } from './../../assets/report-problem.svg';
import { ReactComponent as ProfileIcon } from './../../assets/profile.svg';
import { ReactComponent as SwitchAccountIcon } from './../../assets/switch-accounts.svg';
ReportProblemIcon;
export function Navbar() {
  return (
    <div className="navbar flex-box">
      <button className="navbar-items">
        <Home />
      </button>
      <button className="navbar-items">
        <Messenger />
      </button>
      <button className="navbar-items">
        <Add />
      </button>
      <button className="navbar-items">
        <Favorites />
      </button>
      <button className="navbar-items">
        <Suggestions />
      </button>
      <button className="navbar-items last-icon">
        <Suggestions />
        <div className="navbar-dropdown">
          <ul className="dropdown-list">
            <li className="dropdown-list-item">
              <button className="list-button flex-box">
                <div className="icon-div">
                  <ProfileIcon />
                </div>
                Profile
              </button>
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
              <button className="list-button">Logout</button>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}
