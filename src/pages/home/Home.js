import React from "react";
import styles from "./home.module.scss";
import Images from "./images/Images";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.text_main}>
        <h1>The agency for what comes next.</h1>
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
    </div>
  );
};

export default Home;
