import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import Logo from "./assets/img/Vinted_logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  //checks if token exists
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      // Keep token in cookie
      Cookies.set("token", tokenToSet, { expires: 7 });
      // Refresh state
      setToken(tokenToSet);
    } else {
      // Delete token 
      Cookies.remove("token");
      // change state
      setToken(null);
    }
  };
  return (
    <Router>
      <Nav logo={Logo} token={token} setUser={setUser} />
      {/* Pages */}
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
