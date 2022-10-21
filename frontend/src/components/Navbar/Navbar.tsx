import './Navbar.css';

import { ReactComponent as Add } from 'assets/icons/add.svg';
import { ReactComponent as Suggestions } from 'assets/icons/suggestions.svg';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as Favorites } from 'assets/icons/favorites.svg';
import { ReactComponent as Messenger } from 'assets/icons/messenger.svg';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';

export function Navbar() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  return (
    <div className="navbar flex-box">
      <a className="navbar-items" href="@">
        <Home />
      </a>
      <a className="navbar-items" href="@">
        <Messenger />
      </a>
      <button className="navbar-items">
        <Add />
      </button>
      <button className="navbar-items">
        <Favorites />
      </button>
      <a className="navbar-items" href="@">
        <Suggestions />
      </a>
      <button
        className="navbar-items last-icon"
        onClick={() => {
          setDropdownMenu(st => !st);
        }}
      >
        <Suggestions />
      </button>
      <div className="navbar-items-dropdown relative-item">{dropdownMenu && <DropDownMenu />}</div>
    </div>
  );
}