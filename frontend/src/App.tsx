import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import { Profile, Login, Signup, Home, Settings, EditProfile, EditPassword } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<EditProfile />} />
          <Route path="/settings/editprofile" element={<EditProfile />} />
          <Route path="settings/changepassword" element={<EditPassword />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
