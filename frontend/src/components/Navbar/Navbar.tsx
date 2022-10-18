import './Navbar.css';

import { ReactComponent as Add } from './../../assets/add.svg';
import { ReactComponent as Suggestions } from './../../assets/suggestions.svg';
import { ReactComponent as Home } from './../../assets/home.svg';
import { ReactComponent as Favorites } from './../../assets/favorites.svg';
import { ReactComponent as Messenger } from './../../assets/messenger.svg';

export function Navbar() {
  return (
    <div className="navbar flex-box">
      <div className="navbar-items">
        <Home />
      </div>
      <div className="navbar-items">
        <Messenger />
      </div>
      <div className="navbar-items">
        <Add />
      </div>
      <div className="navbar-items">
        <Favorites />
      </div>
      <div className="navbar-items">
        <Suggestions />
      </div>
      <div className="navbar-items last-icon">
        <Suggestions />
      </div>
    </div>
  );
}
