import React, { useState } from "react";
import axios from "axios";
import {useHistory, Redirect}from "react-router-dom";

const Publish = ({ token }) => {

  const history=useHistory();

  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [exchange, setExchange] = useState(false);
  //add offers
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("condition", condition);
  formData.append("color", color);
  formData.append("city", location);
  formData.append("picture", file);
  formData.append("price", price);

  const handleSubmit = async (event) => {
    try {//avoid refresh
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",//means it's a form data
          },
        }
      );
      history.push(`/offer/${response.data._id}`);
      //console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <div className="publish">
      <div className="container">
        <h2>Vends ton item</h2>
        <form onSubmit={handleSubmit}>
          <section>{/*ADD ITEM PICTURE */}
          <div className="pictureFile">
              <label htmlFor="offerPicture">+</label>
              <label htmlFor="offerPicture">Ajouter une photo</label>
            <input
              type="file"
              id="offerPicture"
              name="offerPicture"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            </div>
          </section>
          <section>{/*ADD ITEM NAME */}
            <article>
              <div className="col-1">
                <span>Titre</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerTitle"
                  name="offerTitle"
                  value={title}
                  placeholder="Ex: neurone..."
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
            </article>
            <hr />
            <article>{/*ADD ITEM DESCRIPTION */}
              <div className="col-1">
                <span>Ex: porté quelques fois, taille correctement...</span>
              </div>
              <div className="col-2">
                <textarea
                  name="offerDescription"
                  id="offerDescription"
                  cols="30"
                  rows="10"
                  value={description}
                  placeholder="ex: porté quelques fois, taille correctement"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></textarea>
              </div>
            </article>
          </section>
          <section>{/*ADD ITEM BRAND */}
            <article>
              <div className="col-1">
                <span>Marque</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerTitle"
                  name="offerTitle"
                  placeholder="ex: Zara"
                  value={brand}
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
            </article>
            <hr />
            <article>{/*ADD ITEM SIZING */}
              <div className="col-1">
                <span>Taille</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerSize"
                  name="offerSize"
                  placeholder="ex: L / 40 / 12"
                  value={size}
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
            </article>
            <hr />
            <article>{/*ADD ITEM COLOR */}
              <div className="col-1">
                <span>Couleur</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerColor"
                  name="offerColor"
                  placeholder="Ex: Fushia"
                  value={color}
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
            </article>
            <hr />
            <article>{/*ADD ITEM CONDITION */}
              <div className="col-1">
                <span>Etat</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerCondition"
                  name="offerCondition"
                  placeholder="ex: Neuf avec étiquette"
                  value={condition}
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </div>
            </article>
            <article>{/*ADD ITEM LOCATION */}
              <div className="col-1">
                <span>Lieu</span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  id="offerLocation"
                  name="offerLocation"
                  placeholder="ex: SPM"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </article>
          </section>

          <section>
            <article>{/*ADD ITEM PRICE */}
              <div className="col-1">
                <span>Prix</span>
              </div>
              <div className="col-2">
                <input
                  type="number"
                  id="offerPrice"
                  name="offerPrice"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
            </article>
            <article>{/*exchange checkbox */}
              <div className="col-1"></div>
              <div className="col-2">
                <input
                  type="checkbox"
                  id="exchanges"
                  name="exchanges"
                  onChange={(event) => {
                    setExchange(!exchange);
                  }}
                />
                <label htmlFor="exchanges">
                  Je suis intéressé(e) par les échanges
                </label>
              </div>
            </article>
          </section>

          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Publish;
