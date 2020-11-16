import React from "react";

const Footer = () => {
  return (
    <footer>
        {/* Je n'ai pas pu ajouter les target car signalement erreur...à approfondir!*/}
      <p>
        Made with <span className="react">React</span> at{" "}
        <a href="https://www.lereacteur.io/">
          <span className="reacteur">Le Reacteur</span>
        </a>{" "}
        by{" "}
        <a href="https://github.com/Sduruty">
          <span className="me">Sandie DURUTY</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;