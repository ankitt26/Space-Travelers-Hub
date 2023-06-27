import styles from '../CSS/Rockets.module.css';

const Rockets = () => (
  <>
    <main className={styles.rocket}>
      <img
        className={styles.image}
        src="https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
        alt="space"
      />
      <div className={styles.details}>
        <h2 className={styles.name}>Falco 1</h2>
        <p className={styles.description}>
          The Falcon 1 was an expendable launch system privately developed and
          manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
          1 became the first privately-developed liquid-fuel launch vehicle to
          go into orbit around the Earth.
        </p>
        <button className={styles.button} type="submit">
          Reserve Rocket
          {' '}
        </button>
      </div>
    </main>
    <main className={styles.rocket}>
      <img
        className={styles.image}
        src="https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
        alt="space"
      />
      <div className={styles.details}>
        <h2 className={styles.name}>Falco 1</h2>
        <p className={styles.description}>
          The Falcon 1 was an expendable launch system privately developed and
          manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
          1 became the first privately-developed liquid-fuel launch vehicle to
          go into orbit around the Earth.
        </p>
        <button className={styles.button} type="submit">
          Reserve Rocket
          {' '}
        </button>
      </div>
    </main>
  </>
);
export default Rockets;
