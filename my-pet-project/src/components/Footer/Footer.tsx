import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© All Rights Reserved</p>
    </footer>
  );
};
export default Footer;
