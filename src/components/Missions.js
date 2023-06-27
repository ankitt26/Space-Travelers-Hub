import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../Redux/missions/missionsSlice';
import Mission from './Mission';

function Missions() {
  const { missions, isLoading } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>
          Loading...
        </h1>
        ;
      </div>
    );
  }

  return (
    <>
      <h1>Missions Page</h1>
      <div className="missions">
        {
          missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))
        }
      </div>

    </>
  );
}

export default Missions;
