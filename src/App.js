import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavLink from './components/NavLink';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

import { fetchdata } from './Redux/Rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
