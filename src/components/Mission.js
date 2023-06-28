/*eslint-disable*/
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missionsSlice';
import styles from '../CSS/Missions.module.css';

function Mission({
  mission_id, mission_name, description, reserved,
}) {
  const dispatch = useDispatch();

  function handleClick(e, mission_id, reserved) {
    e.preventDefault();
    if(reserved) {
      dispatch(leaveMission({mission_id}));
    } else {
      dispatch(joinMission({mission_id}));
    }
  }
  
  return (
    <div className={styles.mission}>
      <div className={styles.mission_name}>
        <p>{mission_name}</p>
      </div> 
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.status}>
        {reserved === true && <p className={styles.active_member}>Active Member</p>}
        {reserved === false && <p className={styles.not_member}>NOT A MEMBER</p>}
      </div>
      <div className={styles.join_leave}>
          {reserved === true && <button key={mission_id} type="button" className={styles.leave_btn} onClick={(e) => handleClick(e, mission_id, reserved)}>Leave Mission</button>}
          {reserved === false && <button key={mission_id} type="button" className={styles.join_btn} onClick={(e) => handleClick(e, mission_id, reserved)}>Join Mission</button>}
      </div>
    </div>
  );
}

Mission.propTypes = {
  mission_name: PropTypes.string,
  mission_id: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool.isRequired,
};

Mission.defaultProps = {
  mission_name: '',
  mission_id: '',
  description: '',
  reserved: false,
};

export default Mission;
