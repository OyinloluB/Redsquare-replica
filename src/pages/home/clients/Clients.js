import React from "react";
import styles from "./clients.module.scss";

const Clients = () => {
  return (
    <>
      <div className={styles.clients}>
        <div className={styles.clients_wrapper}>
          <div className={styles.clients_title}>
            <h3>Select Clients</h3>
          </div>
          <div className={styles.clients_list}>
            <div>
              <p>Cedars-Sinai</p>
            </div>
            <div>
              <p>Jack Daniel’s</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
