import React, { useState } from "react";
import styles from "./Template.module.css";
import filterStyles from "../../FilteringBar/FilteringBar.module.css";
import Header from "../../Header/Header";
import Sidebar from "../../SideBar/SideBar";
import FilteringBar from "../../FilteringBar/FilteringBar";

type TemplateProps = {
  children: React.ReactNode;
  className?: string;
};

const Template: React.FC<TemplateProps> = ({ children, className }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Header onChevronClick={() => setShowFilter(!showFilter)}></Header>
      <FilteringBar
        onCancelClick={() => setShowFilter(!showFilter)}
        clasName={showFilter ? "" : filterStyles.containerHidden}
      />

      {children}
    </div>
  );
};
export default Template;
