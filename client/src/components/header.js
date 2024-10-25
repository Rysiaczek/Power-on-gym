import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <video autoPlay muted loop playsInline>
        <source
          src={process.env.PUBLIC_URL + "/img/testVideo.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="title">
        <h1>Power On Gym</h1>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          obcaecati soluta architecto consectetur, doloribus quisquam enim iste
          dignissimos eos blanditiis nulla inventore officia fuga molestiae, non
          totam assumenda in maxime.
        </p>
      </div>
    </div>
  );
}

export default Header;
