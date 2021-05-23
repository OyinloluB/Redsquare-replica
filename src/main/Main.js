import React from "react";
import Footer from "../components/footer/Footer";
// import styles from "./main.module.scss";

import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";

const Main = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
