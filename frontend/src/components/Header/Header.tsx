import './Header.css';

import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { ReactComponent as DownIcon } from 'assets/icons/down-icon.svg';
import { Search, Navbar } from './../';

export function Header() {
  return (
    <div className="header flex-box">
      <InstagramIcon />
      <div className="down-icon">
        <DownIcon />
      </div>
      <Search />
      <Navbar />
    </div>
  );
}
