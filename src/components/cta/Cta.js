import React from "react";
import styles from "./cta.module.scss";

import heroFooter from "../../assets/images/home/hero-images/hero-footer.jpg";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta_wrapper}>
        <img src={heroFooter} className={styles.cta_hero} alt="hero-footer" />
      </div>
      <div className={styles.cta_content}></div>
    </div>
  );
};

export default Cta;
