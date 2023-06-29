import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from '../CSS/Navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <img src={planet} alt="Logo" className={styles.logo} />
    <h1 className={styles.title}>Space Travellers&apos; Hub</h1>
    <nav className={styles.navigation}>
      <ul className={styles.nav_list}>
        <li>
          <NavLink className={styles.link} to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/Missions">Missions</NavLink>
        </li>
        <li className={styles.br}>|</li>
        <li>
          <NavLink className={styles.link} to="/MyProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>

);

export default Navbar;
