import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Post, Header, Profile, CreatePost, Login, Signup } from './components';

function App() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <div className="app-body">
      <BrowserRouter>
        <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {showCreatePostModal && <CreatePost setCreatePostBox={setShowCreatePostModal} />}
      <Post name="Ejaz hussain" number={3} />
    </div>
  );
}

export default App;
