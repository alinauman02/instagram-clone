import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { logOut } from 'services';

import './AccountOptions.css';
import { ReactComponent as IconSaved } from 'assets/icons/saved.svg';
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg';
import { ReactComponent as IconProfile } from 'assets/icons/profile.svg';
import { ReactComponent as IconSwitchAccount } from 'assets/icons/switch-accounts.svg';
import { ReactComponent as IconReportProblem } from 'assets/icons/report-problem.svg';

export default function AccountOptions() {
  const navigate = useNavigate();

  const onLogOut = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.log(err);
      }
    }
  };

  return (
    <div className="navbar-dropdown flex-direction-column">
      <ul className="dropdown-list">
        <li className="dropdown-list-item">
          <Link className="list-link flex-box" to="/profile">
            <div className="icon-div">
              <IconProfile />
            </div>
            Profile
          </Link>
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
          <Link className="list-link flex-box" to="/settings">
            <div className="icon-div">
              <IconSettings />
            </div>
            Settings
          </Link>
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
          <button className="list-button" onClick={onLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
