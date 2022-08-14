import React from "react";
import styles from "./Template.module.css";

import Header from "../../Header/Header";
import Sidebar from "../../SideBar/SideBar";

type TemplateProps = {
  children: React.ReactNode;
  className?: string;
};

const Template: React.FC<TemplateProps> = ({ children, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Header></Header>

      <Sidebar />
      {children}
    </div>
  );
};
export default Template;
