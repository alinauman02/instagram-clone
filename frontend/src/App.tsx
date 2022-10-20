import './App.css';
import { Post, Header, Profile } from './components';
function App() {
  return (
    <div className="app-body">
      <Header />
      <Post name="Ejaz hussain" number={3} />
      <div className='profile-div'>
        <Profile />
        
      </div>
    </div>
  );
}

export default App;
