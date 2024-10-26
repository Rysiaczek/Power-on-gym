import "../styles/nav.css";
import React, { useState } from "react";

function Nav() {
  const [active, setActive] = useState(false);

  const respons = () => {
    const links = document.querySelector(".links");

    if (active === false) {
      links.style.left = "0";
      setActive(true);
    } else {
      links.style.left = "100%";
      setActive(false);
    }
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
      </div>
      <div className="respons">
        <i class="bi bi-list" onClick={respons}></i>
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
