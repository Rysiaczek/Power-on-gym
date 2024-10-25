import "../styles/nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
      </div>
      <div className="links">
        <a href="#">o nas</a>
        <a href="#">zajęcia fitness</a>
        <a href="#">cennik</a>
        <a href="#">wydarzenia</a>
        <a href="#">kontakt</a>
        <a href="#">masaż</a>
        <a href="#">oferta dla firm</a>
      </div>
    </div>
  );
}

export default Nav;
