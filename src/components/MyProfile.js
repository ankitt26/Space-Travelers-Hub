import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.Rockets.rocketData);
  const Myrocket = data.filter((element) => element.reserved === true);
  const renderRocket = Myrocket.map((element) => (
    <h2 key={element.id} id={element.id}>
      {' '}
      {element.name}
    </h2>
  ));

  return (
    <main className="Myprofile">
      {/* Mission Section */}
      <div>
        <h2> My Mission</h2>
        <div className="reserved_missions">
          <h3>Mission 1</h3>
          <h3>Mission 1</h3>
          <h3>Mission 1</h3>
        </div>
      </div>
      {/* Rocket section */}
      <div>
        <h2>My Rockets</h2>
        {renderRocket}
      </div>
    </main>
  );
};

export default MyProfile;
