import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rocket';
import MyProfile from './pages/MyProfile';
import Mission from './pages/Mission';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
