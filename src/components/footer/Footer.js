import React from "react";
import styles from "./footer.module.scss";
import instagram from "../../assets/images/icons/instagram.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_lhs}>
        <h4>Let’s talk.</h4>
        <span>hi@rsq.com</span>
      </div>
      <div className={styles.footer_rhs}>
        <div className={styles.footer_socials}>
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className={styles.footer_locations}>
          <h5>Mobile, AL</h5>
          <h5>Chicago, IL</h5>
          <h5>Tulsa, OK</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
