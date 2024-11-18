import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Pide tu comida favorita aquí.</h2>
        <p>
          Elige entre un menú diverso con una deliciosa variedad de platillos.
          Nuestra misión es satisfacer tus antojos y elevar tu experiencia
          gastronómica, una deliciosa comida a la vez.
        </p>
        <button>Ver Menu</button>
      </div>
    </div>
  );
};

export default Header;
