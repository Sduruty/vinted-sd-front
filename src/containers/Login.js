import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/Shared/Button";
const Login = ({ setUser }) => {
  let history = useHistory();
  const [userEmail, setUEmail] = useState("");
  const [userPass, setUPass] = useState("");

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
      if (userEmail && userPass) {
        // axios POST request
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
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
        alert("All fiels must be filled !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="margin-top-58">
      <div className="container">
        <Link to="/home">Go back home</Link>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
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
          <br />
          {/*NOT FUNCTIONAL YET */}
          <Button text="Se connecter" type="submit" />
        </form>
      </div>
    </main>
  );
};

export default Login;
