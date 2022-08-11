import React from "react";

import { About, Footer, Header, Certificates, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <Certificates />
      <About />
      <Footer />
    </div>
  );
};

export default App;
