import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-interface.svg";
import styles from "./ThemeSwitcher.module.css";

type ThemeSwitcherProps = {
  onClick?: () => void;
  checked?: boolean;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick, checked }) => {
  const appRef = useContext(AppContext);
  return (
    <div className={styles.switcherContainer}>
      <label className={styles.switcher} htmlFor="switcherBtn">
        <input
          type="checkbox"
          id="switcherBtn"
          className={styles.switcherInput}
          onClick={onClick}
          onChange={(event) => {
            const style = appRef?.current!.style!;
            if (event.target.checked) {
              style.setProperty("--main-bg-color", "var(--dm-main-bg-color)");
              style.setProperty("--bg-input", "var(--dm-bg-input)");
              style.setProperty(
                "--text-color-white",
                "var(--dm-text-color-white)"
              );
              style.setProperty(
                "--background-color-black",
                "var(--text-color-white-grey)"
              );
              style.setProperty(
                "--text-color-switcher",
                "var(--lm-main-bg-color)"
              );
            } else {
              style.removeProperty("--main-bg-color");
              style.removeProperty("--bg-input");
              style.removeProperty("--text-color-white");
              style.removeProperty("--background-color-black");
              style.removeProperty("--text-color-switcher");
            }
          }}
        ></input>
        <span className={styles.switcherSlider}></span>
      </label>
    </div>
  );
};
export default ThemeSwitcher;
