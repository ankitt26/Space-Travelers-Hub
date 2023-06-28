import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../CSS/Rockets.module.css';
import { reserve } from '../Redux/Rockets/rocketSlice';

const RocketButton = ({ Id }) => {
  const dispatch = useDispatch();

  const onclick = (event) => {
    const RId = event.target.id;
    dispatch(reserve(RId));
  };
  return (
    <div>
      <button className={styles.button} id={Id} type="submit" onClick={onclick}>
        Reserve Rocket
      </button>
    </div>
  );
};

RocketButton.propTypes = {
  Id: PropTypes.number.isRequired,
};
export default RocketButton;
