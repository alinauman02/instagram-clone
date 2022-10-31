import './Login.css';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { Input } from './Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'services/auth';
import { FirebaseError } from 'firebase/app';

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userCredentials, setuserCredentials] = useState({
    email: '',
    password: '',
  });

  const canLogin = userCredentials.email !== '' && userCredentials.password !== '';

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    const { name, value } = e.currentTarget;
    setuserCredentials(currentuserCredentials => ({ ...currentuserCredentials, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await logIn(userCredentials.email, userCredentials.password);
      if (res) navigate('/home');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-card flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Phone number, username, or email" name="email" onChange={onChange} />
          <Input type="password" placeholder="Password" name="password" onChange={onChange} />
          <button className="submit-button" name="Log in" value="Log in" disabled={!canLogin}>
            Log in
          </button>
        </form>
        {error && <div className="login-error">{error}</div>}
        <div className="flex-box login-or">
          <div className="login-or-line"></div>
          <div className="login-or-text">OR</div>
          <div className="login-or-line"></div>
        </div>
        <a className="login-forgot" href="@">
          Forgot password?
        </a>
      </div>
      <div className="signup-option flex-box">
        <div className="signup-text">
          don<span>&#39;</span>t have an account?
        </div>
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
