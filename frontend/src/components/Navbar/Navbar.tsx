import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { ReactComponent as IconAdd } from 'assets/icons/add.svg';
import { ReactComponent as IconSuggestions } from 'assets/icons/suggestions.svg';
import { ReactComponent as IconHome } from 'assets/icons/home.svg';
import { ReactComponent as IconFavorites } from 'assets/icons/favorites.svg';
import { ReactComponent as IconMessenger } from 'assets/icons/messenger.svg';
import AccountOptions from './AccountOptions';
interface NavbarProps {
  onCreatePostClick: () => void;
}

export function Navbar({ onCreatePostClick }: NavbarProps) {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <nav className="navbar flex-box">
      <Link className="navbar-items" to="/home">
        <IconHome />
      </Link>
      <a className="navbar-items" href="@">
        <IconMessenger />
      </a>
      <button onClick={onCreatePostClick} className="navbar-items">
        <IconAdd />
      </button>
      <button className="navbar-items">
        <IconFavorites />
      </button>
      <a className="navbar-items" href="@">
        <IconSuggestions />
      </a>
      <button
        className="navbar-items last-icon"
        onClick={() => {
          setDropdownMenu(st => !st);
        }}
      >
        <IconSuggestions />
      </button>
      <div className="navbar-items-dropdown relative-item">{dropdownMenu && <AccountOptions />}</div>
    </nav>
  );
}
