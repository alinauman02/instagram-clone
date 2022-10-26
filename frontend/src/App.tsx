import { useState } from 'react';
import './App.css';
import { Post, Header, Profile, CreatePost } from './components';

function App() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBoxVisibility={setShowCreatePostModal} />}
      <Post name="Ejaz hussain" number={3} />
      <div className="profile-div">
        <Profile />
      </div>
    </div>
  );
}

export default App;
