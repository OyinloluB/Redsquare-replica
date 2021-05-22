import React from "react";
import styles from "./clients.module.scss";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.clients_line}></div>
      <div className={styles.clients_wrapper}>
        <div className={styles.clients_title}>
          <h3>Select Clients</h3>
        </div>
        <div className={styles.clients_list}>
          <div>
            <p>Cedars-Sinai</p>
            <p>Cherokee Casinos</p>
            <p>Flipboard</p>
            <p>Foxwoods</p>
            <p>Glanbia Nutritionals</p>
            <p>Google</p>
            <p>Hard Rock</p>
            <p>Hibbett Sports</p>
            <p>Hilton Worldwide</p>
          </div>
          <div>
            <p>Jack Daniel’s</p>
            <p>Nescafé</p>
            <p>New York Pride</p>
            <p>Rivers Casino</p>
            <p>Snickers</p>
            <p>Southern Comfort</p>
            <p>Uniti Fiber</p>
            <p>The University of Alabama</p>
            <p>Wind Creek Hospitality</p>
          </div>
        </div>
      </div>
      <div className={styles.clients_line}></div>
    </div>
  );
};

export default Clients;
