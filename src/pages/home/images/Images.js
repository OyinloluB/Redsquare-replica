import React from "react";
import styles from "./images.module.scss";

import heroOne from "../../../assets/images/home/hero-images/hero-one.jpg";

const Images = () => {
  return (
    <div className={styles.images}>
      <div>
        <img src={heroOne} alt="hero-one" />
      </div>
    </div>
  );
};

export default Images;
