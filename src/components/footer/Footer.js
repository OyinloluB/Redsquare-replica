import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_lhs}>
        <h4>Let’s talk.</h4>
        <span>hi@rsq.com</span>
      </div>
      <div className={styles.footer_rhs}></div>
    </div>
  );
};

export default Footer;
