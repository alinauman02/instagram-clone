import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { EditPassword, EditProfile, Home, Login, Profile, Settings, Signup } from 'components';
import { auth } from 'config';
import { setAuthState, useAppDispatch } from 'store';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (!user) return;

      const id = user.uid;
      const token = await user.getIdToken(true);
      dispatch(setAuthState({ id, token }));
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="/settings" element={<Navigate to="edit-profile" />} />
            <Route path="/settings/change-password" element={<EditPassword />} />
            <Route path="/settings/edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
