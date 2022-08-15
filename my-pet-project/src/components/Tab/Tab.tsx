import styles from "../SideBar/SideBar.module.css";
type TabProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ active, onClick, children }) => {
  return (
    <button onClick={onClick} className={active ? styles.active : styles.tab}>
      {children}
    </button>
  );
};
export default Tab;
