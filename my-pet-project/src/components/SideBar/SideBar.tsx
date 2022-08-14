import React from "react";
import Header from "../Header/Header";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as TrendsIcon } from "../../assets/trendsIcon.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/favoritesIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settingsIcon.svg";
import footerStyles from "../Footer/Footer.module.css";
import styles from "./SideBar.module.css";
import Footer from "../Footer/Footer";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <HomeIcon className={styles.svg} />
            <a href="/" className={styles.text}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <TrendsIcon className={styles.svg} />
            <a href="/" className={styles.text}>
              Trends
            </a>
          </li>
          <li className={styles.item}>
            <FavoritesIcon className={styles.svg} />
            <a href="/" className={styles.text}>
              Favorites
            </a>
          </li>
          <li className={styles.item}>
            <SettingsIcon className={styles.svg} />
            <a href="/" className={styles.text}>
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <Footer className={footerStyles.footerMain} />
    </aside>
  );
};
export default Sidebar;
