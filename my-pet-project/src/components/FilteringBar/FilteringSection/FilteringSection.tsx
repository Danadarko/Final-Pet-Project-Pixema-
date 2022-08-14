import React from "react";
import styles from "../FilteringBar.module.css";

type FilteringSectionProps = {
  children: React.ReactNode;
  title: string;
};

const FilteringSection: React.FC<FilteringSectionProps> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.sectionContainer}>
      <h4 className={styles.rowTitle}>{title}</h4>
      {children}
    </div>
  );
};

export default FilteringSection;
