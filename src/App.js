import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import NavProfile from './pages/navProfile';
import NavRocket from './pages/navRocket';
import NavMission from './pages/navMission';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<NavRocket />} />
          <Route path="/mission" element={<NavMission />} />
          <Route path="/profile" element={<NavProfile />} />
        </Routes>
      </div>

    </Provider>
  );
}

export default App;
