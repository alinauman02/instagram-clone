import { ReactComponent as DownIcon } from 'assets/icons/down-icon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { Navbar, Search } from 'components';
import './Header.css';

interface HeaderProps {
  onCreatePostClick: () => void;
}

export function Header({ onCreatePostClick }: HeaderProps) {
  return (
    <div className="header flex-box">
      <InstagramIcon />
      <div className="down-icon">
        <DownIcon />
      </div>
      <Search />
      <Navbar onCreatePostClick={onCreatePostClick} />
    </div>
  );
}
