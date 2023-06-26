import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
