import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../CSS/Rockets.module.css';
import { reserve } from '../Redux/Rockets/rocketSlice';

const RocketButton = ({ Id, reserved }) => {
  console.log(reserved);
  let buttonText = 'Reserve Rocket';
  if (reserved === true) {
    buttonText = 'Cancel Reservation';
  }
  const dispatch = useDispatch();

  const onclick = (event) => {
    const RId = event.target.id;
    dispatch(reserve(RId));
  };
  return (
    <div>
      <button className={styles.button} id={Id} type="submit" onClick={onclick}>
        {buttonText}
      </button>
    </div>
  );
};

RocketButton.propTypes = {
  Id: PropTypes.number.isRequired,
  reserved: PropTypes.string,
};

RocketButton.defaultProps = {
  reserved: 'false',
};
export default RocketButton;
