import { AppPages, TabEnum } from "../../types";
import Tab from "../Tab/Tab";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as TrendsIcon } from "../../assets/trendsIcon.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/favoritesIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settingsIcon.svg";
import styles from "../SideBar/SideBar.module.css";
import { Link } from "react-router-dom";

type TabListProps = {
  tabs: TabEnum[];
  activeTab?: TabEnum;
  onTabClick: (selectedTab: TabEnum) => void;
};

const TabList: React.FC<TabListProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <Link to={AppPages.All_FILMS} className={styles.list}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => onTabClick(tab)}
        >
          {tab === "Home" ? (
            <HomeIcon className={styles.svg} />
          ) : tab === "Trends" ? (
            <TrendsIcon className={styles.svg} />
          ) : tab === "Favorites" ? (
            <FavoritesIcon className={styles.svg} />
          ) : (
            <SettingsIcon className={styles.svg} />
          )}
          {tab}
        </Tab>
      ))}
    </Link>
  );
};
export default TabList;
