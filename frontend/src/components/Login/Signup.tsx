import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { Input } from './Input';
import { InputButton } from './InputButton';
import { useState } from 'react';
import { auth } from 'config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });
  const [error, setError] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    const fieldName = e.currentTarget.name;
    setUser(
      fieldName === 'email'
        ? { ...user, email: e.currentTarget.value }
        : fieldName === 'number'
        ? { ...user, number: e.currentTarget.value }
        : fieldName === 'name'
        ? { ...user, name: e.currentTarget.value }
        : { ...user, password: e.currentTarget.value }
      // fieldName === 'email'
      //   ? user => {
      //       return e.target ? { ...user, email: e.currentTarget.value } : user;
      //     }
      //   : fieldName === 'number'
      //   ? user => {
      //       return e.target ? { ...user, number: e.currentTarget.value } : user;
      //     }
      //   : fieldName === 'name'
      //   ? user => {
      //       return e.target ? { ...user, name: e.currentTarget.value } : user;
      //     }
      //   : user => {
      //       return e.target ? { ...user, password: e.currentTarget.value } : user;
      //     }
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(userCredentials => {
        console.log(userCredentials.user);
        navigate('/home');
      })
      .catch(err => setError(err.message));
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
          <Input type="name" placeholder="Full Name" name="name" onChange={onChange} />
          <Input type="number/email" placeholder="Username" name="number" onChange={onChange} />
          <Input type="password" placeholder="Password" name="password" onChange={onChange} />
          <InputButton name="Sign up" />
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
