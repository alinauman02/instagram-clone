import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as GoogleIcon } from 'assets/icons/google-icon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { logIn, signUpWithGoogle } from 'services';
import './Signup.css';

import { signUpApi } from 'apis/auth';
import { Input } from './Input';

export function Signup() {
  console.count('rendered');
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const canSignUp =
    userCredentials.email !== '' &&
    userCredentials.username !== '' &&
    userCredentials.password !== '' &&
    userCredentials.name !== '';

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    const { name, value } = e.currentTarget;
    setUserCredentials(currentuserCredentials => ({ ...currentuserCredentials, [name]: value }));
  };

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signUpApi(
        userCredentials.name,
        userCredentials.email,
        userCredentials.password,
        userCredentials.username
      );
      if (res.error) throw new Error(res.error);
      await logIn(userCredentials.email, userCredentials.password);
      navigate('/home');
    } catch (error) {
      if (error instanceof Error) setError(error.message);
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
    <div className="signup flex-direction-column">
      <div className="signup-card flex-direction-column flexbox">
        <div className="instagram-icon">
          <InstagramIcon />
        </div>
        <div className="signup-desc">Sign up to see photos and videos from your friends</div>
        <button className="signup-button-google" onClick={handleGoogleLogin}>
          <span className="google-icon">
            <GoogleIcon />
            Login with Google
          </span>
        </button>
        <div className="flex-box signup-or">
          <div className="signup-or-line"></div>
          <div className="signup-or-text">OR</div>
          <div className="signup-or-line"></div>
        </div>
        <form className="signup-form flex-direction-column" onSubmit={onSignUp}>
          <Input type="email" placeholder="Email" name="email" onChange={onChange} />
          <Input type="string" placeholder="Full Name" name="name" onChange={onChange} />
          <Input type="string" placeholder="Username" name="username" onChange={onChange} />
          <Input type="password" placeholder="Password" name="password" onChange={onChange} />
          <button type="submit" className="submit-button" name="Sign up" value="Sign up" disabled={!canSignUp}>
            Sign up
          </button>
        </form>
        {error && <div className="signup-error">{error}</div>}
      </div>
      <div className="login-option">
        <div className="login-text">Do you have an account?</div>
        <Link className="login-link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
}
