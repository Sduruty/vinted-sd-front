import React from "react";
import destroyEffect from "../assets/img/destroyEffect.svg";

const Star = () => {
  return (
    <section className="star">
      <div>
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <button>Commencer à vendre</button>
        
      </div>
      <img className="destroyEffect" src={destroyEffect} alt="" />
    </section>
  );
};

export default Star;
