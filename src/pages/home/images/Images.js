import React from "react";
import { motion } from "framer-motion";
import styles from "./images.module.scss";

import heroOne from "../../../assets/images/home/hero-images/hero-one.jpg";

const Images = () => {
  return (
    <div className={styles.images}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1.45 }}
      >
        <img src={heroOne} alt="hero-one" />
      </motion.div>
    </div>
  );
};

export default Images;
