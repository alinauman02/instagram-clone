import './Search.css';

import { ReactComponent as IconSearch } from 'assets/icons/search-icon.svg';

export function Search() {
  return (
    <div className="search flex-box">
      <div className="search-icon">
        <IconSearch />
      </div>
      <form className="search-form">
        <input className="search-box" type="string" placeholder="Search" />
      </form>
    </div>
  );
}
