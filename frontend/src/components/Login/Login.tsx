import './Login.css';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
// import { ReactComponent as FacebookIcon } from 'assets/icons/instagram-icon.svg';

import { Input } from './Input';
import { InputButton } from './InputButton';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="login">
      <div className="login-card flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <form className="login-form" action="home">
          <Input type="number/email" placeholder="Phone number, username, or email" name="username" />
          <Input type="password" placeholder="Password" name="password" />
          <InputButton name="Log in" />
        </form>
        <div className="flex-box login-or">
          <div className="login-or-line"></div>
          <div className="login-or-text">OR</div>
          <div className="login-or-line"></div>
        </div>
        <a className="login-forgot" href="@">
          {' '}
          Forgot password?
        </a>
      </div>
      <div className="signup-option flex-box">
        <div className="signup-text">dont have an account?</div>
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
