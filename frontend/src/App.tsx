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
