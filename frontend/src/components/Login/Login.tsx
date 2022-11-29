import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as GoogleIcon } from 'assets/icons/google-icon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { logIn, signUpWithGoogle } from 'services';
import './Login.css';

import { InputField } from 'components';

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const canLogin = userCredentials.email !== '' && userCredentials.password !== '';

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    const { name, value } = e.currentTarget;
    setUserCredentials(currentuserCredentials => ({ ...currentuserCredentials, [name]: value }));
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

  const handleGoogleLogin = async () => {
    try {
      const res = await signUpWithGoogle();
      if (res) navigate('/home');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login flex-direction-column">
      <div className="login-card flex-direction-column flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <form className="login-form flex-direction-column" onSubmit={handleSubmit}>
          <InputField type="email" placeholder="Email" name="email" onChange={onChange} value={userCredentials.email} />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            value={userCredentials.password}
          />
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
        <button className="login-button-google" onClick={handleGoogleLogin}>
          <span className="google-icon">
            <GoogleIcon />
            Login with Google
          </span>
        </button>
        <a className="login-forgot" href="@">
          Forgot password?
        </a>
      </div>
      <div className="signup-option flex-box">
        <div className="signup-text">
          Don<span>&#39;</span>t have an account?
        </div>
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
