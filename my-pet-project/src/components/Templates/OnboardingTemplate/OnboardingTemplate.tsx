import React from "react";
import styles from "./OnboardingTemplate.module.css";
import { ReactComponent as LogoIcon } from "../../../assets/pixema.svg";
import Footer from "../../Footer/Footer";

type OnboardingTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <LogoIcon className={styles.svg}></LogoIcon>
      {children}
      <Footer />
    </div>
  );
};
export default OnboardingTemplate;
