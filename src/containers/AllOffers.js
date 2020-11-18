import React from "react";
import { Link } from "react-router-dom";

const Offers = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item, index) => {
        return (
          <Link key={index} to={`/offer/${item._id}`}>
            <article className="item">
              <div className="userInfos">
                <img
                  src={
                    item.owner.account.avatar &&
                    item.owner.account.avatar.secure_url
                  }
                  alt=""
                />
                <span>{item.owner.account.username}</span>
              </div>
              <div className="itemPict">
                <img src={item.product_image.secure_url} alt="item à vendre" />
              </div>
              <p className="price">{item.product_price} €</p>
              <p>{item.product_details[1].TAILLE}</p>
              <p>{item.product_details[0].MARQUE}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
