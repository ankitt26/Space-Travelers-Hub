const MyProfile = () => (
  <main className="Myprofile">
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
      <ProfileRocket />
    </div>
  </main>
);

const ProfileRocket = () => (
  <div className="reserved_rockets">
    <h3>Falco 9</h3>
    <h3>Falco 9</h3>
    <h3>Falco 9</h3>
  </div>
);

export default MyProfile;
