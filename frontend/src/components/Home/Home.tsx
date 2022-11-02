import { useState } from 'react';

import './Home.css';
import { CreatePost, Header, Post } from 'components';

const { name, number } = { name: 'Ejaz Hussain', number: 3 };

export function Home() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <div className="app-body">
      <Header onCreatePostClick={() => setShowCreatePostModal(true)} />
      {showCreatePostModal && <CreatePost setCreatePostBoxVisibility={setShowCreatePostModal} />}
      <Post name={name} number={number} />
    </div>
  );
}
