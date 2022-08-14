import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.text} ${className}`}>© All Rights Reserved</p>
    </footer>
  );
};
export default Footer;
