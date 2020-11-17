import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
//CONTAINERS
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

//LIBRARY
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [search, setSearch] = useState("");

  let cookie = Cookie.get("userToken");
  const [token, setToken] = useState(cookie || null);
  // console.log(token);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      //if tokenToSet is already known
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      // delete cookie
      Cookie.remove("userToken");
    }
  };

  return (
    <>
      <Router>
        {/*As header is out of switch, it'll appears on each page*/}
        <Header
          token={token}
          setToken={setToken}
          setUser={setUser}
          setSearch={setSearch}
        />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/publish">
            <Publish setUser={setUser} />
          </Route>

          <Route path="/payment">
            <Payment setUser={setUser} />
          </Route>

          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} />
          </Route>

          <Route path="/">
            <Home setSearch={setSearch} search={search} />
          </Route>
        </Switch>
        {/*As footer is out of switch, it'll appears on each page*/}
        <Footer />
      </Router>
    </>
  );
}

export default App;
