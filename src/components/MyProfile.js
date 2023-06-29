import React from 'react';
import { useSelector } from 'react-redux';
import Styles from '../CSS/MyProfile.module.css';

const MyProfile = () => {
  const data = useSelector((state) => state.Rockets.rocketData);
  const Myrocket = data.filter((element) => element.reserved === true);
  const renderRocket = Myrocket.map((element) => (
    <h4 className={Styles.rockets} key={element.id} id={element.id}>
      {' '}
      {element.name}
    </h4>
  ));

  const missionsData = useSelector((state) => state.missions.missions);
  const myMissions = missionsData.filter((mission) => mission.reserved === true);
  const renderMissions = myMissions.map((mission) => (
    <h4 className={Styles.rockets} key={mission.mission_id} id={mission.mission_id}>
      {' '}
      {mission.mission_name}
    </h4>
  ));

  return (
    <main className={Styles.MyProfile}>
      {/* Mission Section */}
      <div className={Styles.mission_section}>
        <h2 className={Styles.heading2}>My Missions</h2>
        <div className={Styles.reserved}>{renderMissions}</div>
      </div>
      {/* Rocket section */}
      <div className={Styles.rocket_section}>
        <h2 className={Styles.heading2}>My Rockets</h2>
        <div className={Styles.reserved}>{renderRocket}</div>
      </div>
    </main>
  );
};

export default MyProfile;
