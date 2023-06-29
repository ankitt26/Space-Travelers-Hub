import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { getMissions } from './Redux/missions/missionsSlice';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

import { fetchData } from './Redux/Rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
