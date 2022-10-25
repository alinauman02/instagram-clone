import { useState } from 'react';

import './Home.css';
import { CreatePost, Header, Post } from 'components';

export function Home() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBox={setShowCreatePostModal} />}
      <Post name="Ejaz hussain" number={3} />
    </div>
  );
}
