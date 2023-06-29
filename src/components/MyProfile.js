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

  return (
    <main className={Styles.MyProfile}>
      {/* Mission Section */}
      <div className={Styles.mission_section}>
        <h2 className={Styles.heading2}> My Mission</h2>
        <div className={Styles.reserved}>
          <h4 className={Styles.rockets}>Mission 1</h4>
          <h4 className={Styles.rockets}>Mission 1</h4>
          <h4 className={Styles.rockets}>Mission 1</h4>
        </div>
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
