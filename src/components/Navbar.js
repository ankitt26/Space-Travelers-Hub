import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <header>
    <img src={planet} alt="Logo" className="logo" />
    <h1 className="sth-header">Space Travellers&apos; Hub</h1>
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link className="link" to="/">Rockets</Link>
        </li>
        <li>
          <Link className="link missions-li" to="/Missions">Missions</Link>
        </li>
        <li>
          <Link className="link" to="/Profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>

);

export default Navbar;
