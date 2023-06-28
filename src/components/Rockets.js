import { useSelector } from 'react-redux';
import styles from '../CSS/Rockets.module.css';
import RocketButton from './RocketButton';

const Rockets = () => {
  const data = useSelector((state) => state.Rockets.rocketData);
  const display = data.map((rocket) => {
    let badgeClass = 'badge-none';
    if (rocket.reserved === true) {
      badgeClass = 'badge';
    }
    return (
      <main className={styles.rocket} key={rocket.id}>
        <img className={styles.image} src={rocket.flickr_images} alt="space" />
        <div className={styles.details}>
          <h2 className={styles.name}>{rocket.name}</h2>
          <p className={styles.description}>
            {' '}
            <span className={badgeClass}>Reserved</span>
            {rocket.description}
          </p>
          <RocketButton Id={rocket.id} reserved={rocket.reserved} />
        </div>
      </main>
    );
  });
  return <section className={styles.rocket_page}>{display}</section>;
};
export default Rockets;
