import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-interface.svg";
import styles from "./ThemeSwitcher.module.css";

type ThemeSwitcherProps = {
  onClick?: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
  return (
    <div className={styles.switcherContainer}>
      <label className={styles.switcher}>
        <input
          type="checkbox"
          id="switcherBtn"
          className={styles.switcherInput}
        ></input>
        <span className={styles.switcherSlider}></span>
      </label>
    </div>
  );
};
export default ThemeSwitcher;
