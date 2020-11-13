import React from "react";
import "./index.css";
import Button from "../../Shared/Button";

const Star = () => {
  return (
    <header className="home-header">
      <div className="container">
        <div className="intro-hero">
          <span>Prêts à faire du tri dans vos placards ?</span>
          {/*NOT FUNCTIONAL...JUST AESTHETIC FOR NOW*/}
          <Button  text="Commencer à vendre" />
        </div>
      </div>
    </header>
  );
};

export default Star;
