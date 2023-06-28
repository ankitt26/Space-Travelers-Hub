import { useSelector } from 'react-redux';
import styles from '../CSS/Rockets.module.css';
import RocketButton from './RocketButton';

const Rockets = () => {
  const data = useSelector((state) => state.Rockets.rocketData);
  const display = data.map((rocket) => (
    <main className={styles.rocket} key={rocket.id}>
      <img className={styles.image} src={rocket.flickr_images} alt="space" />
      <div className={styles.details}>
        <h2 className={styles.name}>{rocket.name}</h2>
        <p className={styles.description}>{rocket.description}</p>
        <RocketButton />
      </div>
    </main>
  ));
  return <section className={styles.rocket_page}>{display}</section>;
};
export default Rockets;
