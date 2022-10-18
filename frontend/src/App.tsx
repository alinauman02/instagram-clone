import './App.css';
import { Post, Header } from './components';
function App() {
  return (
    <div>
      <Header />
      <Post name="Ejaz hussain" number={3} />
    </div>
  );
}

export default App;
