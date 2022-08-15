import { on } from "events";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/pixema.svg";
import { SearchBar } from "../../features/Search/SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./Header.module.css";

type HeaderProps = {
  onChevronClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onChevronClick }) => {
  return (
    <header className={styles.header}>
      <LogoIcon className={styles.svg} />
      <SearchBar />
      <UserInfo onClick={onChevronClick} />
    </header>
  );
};
export default Header;
