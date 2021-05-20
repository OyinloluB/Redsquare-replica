import React from "react";
import styles from "./nav.module.scss";

import arrowRight from "../../assets/images/icons/arrow-right.svg";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_container}>
        <div className={styles.nav_shapes}></div>
        <div className={styles.nav_cta_one}>
          <p>Work</p>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
