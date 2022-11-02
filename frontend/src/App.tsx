import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'store/store';
import { Provider } from 'react-redux';

import './App.css';
import { Profile, Login, Signup, Home } from './components';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
