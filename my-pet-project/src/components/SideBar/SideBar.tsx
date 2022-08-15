import React from "react";
import Header from "../Header/Header";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as TrendsIcon } from "../../assets/trendsIcon.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/favoritesIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settingsIcon.svg";
import footerStyles from "../Footer/Footer.module.css";
import styles from "./SideBar.module.css";
import Footer from "../Footer/Footer";
import TabList from "../TabsList/TabList";
import { TabEnum } from "../../types";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

type SidebarProps = {
  tabs: TabEnum[];
  activeTab?: TabEnum;
  onTabClick: (selectedTab: TabEnum) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <aside className={styles.sidebarContainer}>
      <nav>
        <TabList tabs={tabs} activeTab={activeTab} onTabClick={onTabClick} />
      </nav>

      <Footer className={footerStyles.footerMain} />
    </aside>
  );
};
export default Sidebar;
