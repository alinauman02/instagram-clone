import './Search.css';

import { ReactComponent as SearchIcon } from './../../assets/search-icon.svg';

export function Search() {
  return (
    <div className="search flex-box">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <form>
        <input className="search-box" type="string" placeholder="search" />
      </form>
    </div>
  );
}
