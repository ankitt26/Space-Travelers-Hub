/*eslint-disable*/
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missionsSlice';

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
    <div className="mission">
      <div className="mission-name">
        <p>{mission_name}</p>
      </div> 
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="status">
        {reserved === true && <p>Active Member</p>}
        {reserved === false && <p>Not a Member</p>}
      </div>
      <div className="join-leave">
        <button key={mission_id} type="button" className="join-btn" onClick={(e) => handleClick(e, mission_id, reserved)}>{reserved ? 'Leave Mission' : 'Join Mission'}</button>
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
