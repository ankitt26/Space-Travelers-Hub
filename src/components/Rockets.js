import { useSelector } from 'react-redux';

const Rockets = () => {
  const data = useSelector((state) => state.Rockets.rocketData);
  console.log(data);
  return (
    <main>
      <img
        src="https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
        alt="space"
      />
      <div>
        <h2>Falco 1</h2>
        <p>
          The Falcon 1 was an expendable launch system privately developed and
          manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
          1 became the first privately-developed liquid-fuel launch vehicle to
          go into orbit around the Earth.
        </p>
        <button type="submit">Reserve Rocket </button>
      </div>
    </main>
  );
};

export default Rockets;
