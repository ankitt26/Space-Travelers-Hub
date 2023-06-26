// import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

function NavLink() {
  return (
    <header>
      <img src={planet} alt="Logo" className="logo" />
      <h1 className="sth-header">Space Travellers&apos; Hub</h1>
      <nav className="navigation">
        Nav Goes Here
      </nav>
    </header>

  );
}

export default NavLink;
