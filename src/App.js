import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getMissions } from './Redux/missions/missionsSlice';
import NavLink from './components/NavLink';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
