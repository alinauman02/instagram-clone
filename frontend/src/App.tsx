import { useState } from 'react';
import './App.css';
import { Post, Header, Profile, CreatePost } from './components';
function App() {
  const [CreatePostBox, setCreatePostBox] = useState(true);
  return (
    <div className="app-body">
      <Header />
      {CreatePostBox && <CreatePost setCreatePostBox={setCreatePostBox} />}
      <Post name="Ejaz hussain" number={3} />
      <div className="profile-div">
        <Profile />
      </div>
    </div>
  );
}

export default App;
