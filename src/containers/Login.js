import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    //avoid refresh
    event.preventDefault();
    try {
      const response = await axios.post(
        // I use Reacteur's API for now because I fucked mine...
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      //transfers token to app.js in order to check if user already signed in
      setUser(response.data.token);
      history.push("/publish"); //if yes, redirect to "/publish"
    } catch (error) {
      console.log(error.response);
    }
  };
//LOGIN FORM
  return (
    <section className="login">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        {/*EMAIL FIELD */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <hr />
        {/*PASSWORD FIELD */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <hr />

        <input />
        <button type="submit">Se connecter</button>
        <Link to="/signup">
          <p className="connect">Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </section>
  );
};

export default Login;
