import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-interface.svg";
import styles from "./UserInfo.module.css";

type UserInfoProps = {};

const UserInfo: React.FC<UserInfoProps> = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.image}>UN</div>
      <p className={styles.text}>User name</p>
      <ChevronIcon className={styles.svg}></ChevronIcon>
    </div>
  );
};
export default UserInfo;
