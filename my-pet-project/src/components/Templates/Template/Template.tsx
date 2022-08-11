import React from "react";
import styles from "./OnboardingTemplate.module.css";
import { ReactComponent as LogoIcon } from "../../../assets/pixema.svg";
import Footer from "../../Footer/Footer";

type TemplateProps = {
  children: React.ReactNode;
  className?: string;
};

const Template: React.FC<TemplateProps> = ({ children, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <LogoIcon className={styles.svg}></LogoIcon>
      {children}
      <Footer />
    </div>
  );
};
export default Template;
