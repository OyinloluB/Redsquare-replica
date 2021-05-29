import React from "react";
import { motion } from "framer-motion";
import Clients from "./clients/Clients";
import styles from "./home.module.scss";
import Images from "./images/Images";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.text_main}>
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.45 }}
        >
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 0.20 }}
          >
            The
          </motion.span>
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 0.40 }}
          >
            agency
          </motion.span>
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 0.60 }}
          >
            for
          </motion.span>
          <br />
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 0.80 }}
          >
            what
          </motion.span>
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 1 }}
          >
            comes
          </motion.span>
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 2, delay: 1.20 }}
          >
            next.
          </motion.span>
        </motion.h1>
      </section>
      <Images />
      <section className={styles.text_sub}>
        <h2>
          We deal in ideas, design and media that are category defying. When the
          world Millis, you’ve got to Vanilli.
        </h2>
        <p>
          Red Square believes in rigorous development of brand strategy and
          whip-smart execution. We make all sorts of things. Things that move
          markets, compel audiences and sell product. We help great brands
          create what comes next.
        </p>
      </section>
      <Clients />
    </div>
  );
};

export default Home;
