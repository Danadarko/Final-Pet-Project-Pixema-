import React, { useState } from "react";
import styles from "./Template.module.css";
import filterStyles from "../../FilteringBar/FilteringBar.module.css";
import Header from "../../Header/Header";

import FilteringBar from "../../FilteringBar/FilteringBar";

type TemplateProps = {
  children: React.ReactNode;
  className?: string;
  onRatingClick: () => void;
  onYearClick: () => void;
};

const Template: React.FC<TemplateProps> = ({
  children,
  className,
  onRatingClick,
  onYearClick,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Header onChevronClick={() => setShowFilter(!showFilter)}></Header>
      <FilteringBar
        onCancelClick={() => setShowFilter(!showFilter)}
        clasName={showFilter ? "" : filterStyles.containerHidden}
        onRatingClick={onRatingClick}
        onYearClick={onYearClick}
      />

      {children}
    </div>
  );
};
export default Template;
