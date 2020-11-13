import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/Shared/Button";

const Signup = ({ setUser }) => {
  let history = useHistory();
  const [userName, setUName] = useState("");
  const [userEmail, setUEmail] = useState("");
  const [userPass, setUPass] = useState("");

  const handleUNameChange = (event) => {
    const value = event.target.value;
    setUName(value);
  };

  const handleUEmailChange = (event) => {
    const value = event.target.value;
    setUEmail(value);
  };

  const handleUPassChange = (event) => {
    const value = event.target.value;
    setUPass(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (userName && userEmail && userPass) {
        // axios POST request
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username: userName,
            email: userEmail,
            password: userPass,
          }
        );
        //check if in DB
        if (response.data.token) {
          setUser(response.data.token);
          console.log(response.data.token);
          history.push("/");
        }
      } else {
        alert("All fields must be filled !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="margin-top-58">
      <div className="container">
        <Link to="/home">Go back home</Link>
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Nom d'utilisateur"
            value={userName}
            onChange={handleUNameChange}
          />
          <br />
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            value={userEmail}
            onChange={handleUEmailChange}
          />
          <br />
          <input
            type="password"
            name="userPass"
            placeholder="Mot de passe"
            value={userPass}
            onChange={handleUPassChange}
          />

          {/*NOT FUNCTIONAL YET */}
          <Button type="submit" text="S'inscrire" />
        </form>
      </div>
    </main>
  );
};

export default Signup;
