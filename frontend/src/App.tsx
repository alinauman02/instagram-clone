import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import { Profile, Login, Signup, Home } from './components';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
