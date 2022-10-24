import { useState } from 'react';
import './App.css';
import { Post, Header, Profile, CreatePost, Login, Signup } from './components';

function App() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBox={setShowCreatePostModal} />}
      <Post name="Ejaz hussain" number={3} />
      <div className="profile-div">
        <Profile />
      </div>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
