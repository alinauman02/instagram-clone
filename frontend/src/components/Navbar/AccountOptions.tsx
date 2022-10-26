import './AccountOptions.css';
import { ReactComponent as IconSaved } from 'assets/icons/saved.svg';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import { ReactComponent as IconProfile } from 'assets/icons/profile.svg';
import { ReactComponent as IconSwitchAccount } from 'assets/icons/switch-accounts.svg';
import { ReactComponent as IconReportProblem } from 'assets/icons/report-problem.svg';

export default function AccountOptions() {
  return (
    <div className="navbar-dropdown">
      <ul className="dropdown-list">
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <IconProfile />
            </div>
            Profile
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <IconSaved />
            </div>
            Saved
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <IconSettings />
            </div>
            Settings
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <IconReportProblem />
            </div>
            Report a problem
          </button>
        </li>
        <li className="dropdown-list-item">
          <button className="list-button flex-box">
            <div className="icon-div">
              <IconSwitchAccount />
            </div>
            Switch accounts
          </button>
        </li>
        <li className="dropdown-list-item last-dropdown-list-item">
          <button className="list-button">Logout</button>
        </li>
      </ul>
    </div>
  );
}
