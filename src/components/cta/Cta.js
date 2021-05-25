import React from "react";
import styles from "./cta.module.scss";

import heroFooter from "../../assets/images/home/hero-images/hero-footer.jpg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta_wrapper}>
        <img src={heroFooter} className={styles.cta_hero} alt="hero-footer" />
      </div>
      <div className={styles.cta_content}>
        <div className={styles.cta_text}>
          <h3>All Projects</h3>
        </div>
        <div className={styles.cta_cta}>
          <p>Work</p>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
