import React from "react";

import footerStyles from "../Footer/Footer.module.css";
import styles from "./SideBar.module.css";
import Footer from "../Footer/Footer";
import TabList from "../TabsList/TabList";
import { TabEnum } from "../../types";

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
