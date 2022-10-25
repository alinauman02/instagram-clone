import { Link } from 'react-router-dom';

import './Signup.css';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { Input } from './Input';
import { InputButton } from './InputButton';

export function Signup() {
  return (
    <div className="signup">
      <div className="signup-card flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <div className="signup-desc">Sign up to see photos and videos from your friends</div>
        <form className="signup-form" action="login">
          <Input type="email" placeholder="Mobile Number or Email" name="email" />
          <Input type="name" placeholder="Full Name" name="name" />
          <Input type="number/email" placeholder="Username" name="username" />
          <Input type="password" placeholder="Password" name="password" />
          <InputButton name="Sign up" />
        </form>
        <div className="flex-box login-or">
          <div className="signup-or-line"></div>
          <div className="signup-or-text">OR</div>
          <div className="signup-or-line"></div>
        </div>
      </div>
      <div className="login-option">
        <div className="login-text">Do have an account?</div>
        <Link className="login-link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
}
