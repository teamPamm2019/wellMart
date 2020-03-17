import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// import Navbar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./pages/About";
import Search from "./pages/Search";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import News from "./pages/News";
import "./App.css";
import Discover from "../src/pages/Discover";
import Navbar from "../src/components/Navbar";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/Navbar" component={Navbar} />

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/Header" />
              <PrivateRoute exact path="/doctor" component={About} />
              <PrivateRoute exact path="/discover" component={Discover} />
              <PrivateRoute exact path="/search" component={Search} />
              <PrivateRoute exact path="/news" component={News} />
            </Switch>
            <SubFooter />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
