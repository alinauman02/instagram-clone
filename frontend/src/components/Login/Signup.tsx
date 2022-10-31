import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { Input } from './Input';
import { useState } from 'react';
import { signUp } from 'services/auth';
import { FirebaseError } from 'firebase/app';

export function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });
  const [error, setError] = useState('');

  const canSignUp = user.email !== '' && user.number !== '' && user.password !== '' && user.name !== '';

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    const { name, value } = e.currentTarget;
    setUser(currentUser => ({ ...currentUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signUp(user.email, user.password);
      if (res) navigate('/home');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-card flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <div className="signup-desc">Sign up to see photos and videos from your friends</div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Mobile Number or Email" name="email" onChange={onChange} />
          <Input type="string" placeholder="Full Name" name="name" onChange={onChange} />
          <Input type="string" placeholder="Username" name="number" onChange={onChange} />
          <Input type="password" placeholder="Password" name="password" onChange={onChange} />
          <button className="submit-button" name="Sign up" value="Sign up" disabled={!canSignUp}>
            Sign up
          </button>
        </form>
        {error && <div className="signup-error">{error}</div>}
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
