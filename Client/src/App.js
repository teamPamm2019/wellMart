import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";

import Login from "./components/Login";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import News from "./pages/News";

function App() {
  return (
    <Wrapper>
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={About} />
          <Route exact path="/Login" component={Login} />

          <Route exact path="/Doctor" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/news" component={News} />

          <SubFooter />
          <Footer />
        </div>
      </Router>
    </Wrapper>
  );
}

export default App;
