import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-interface.svg";
import styles from "./UserInfo.module.css";

type UserInfoProps = {
  onClick: () => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ onClick }) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.image}>UN</div>
      <p className={styles.text}>User name</p>
      <ChevronIcon className={styles.svg} onClick={onClick}></ChevronIcon>
    </div>
  );
};
export default UserInfo;
