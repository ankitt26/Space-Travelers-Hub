import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" />
        <Route path="/categories" />
      </Routes>
    </>
  );
}

export default App;
