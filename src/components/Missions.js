import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import styles from '../CSS/Missions.module.css';
import { getMissions } from '../Redux/missions/missionsSlice';

function Missions() {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length > 0) return;
    dispatch(getMissions());
  }, [dispatch, missions.length]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        ;
      </div>
    );
  }

  return (
    <>
      <div className={styles.missions}>
        <div className={styles.headings}>
          <div className={styles.heading}>Mission</div>
          <div className={styles.heading}>Description</div>
          <div className={styles.heading}>Status</div>
          <div className={styles.heading} />
        </div>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            mission_id={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </div>
    </>
  );
}

export default Missions;
