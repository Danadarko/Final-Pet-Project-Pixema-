import styles from "./Settings.module.css";
import btnStyles from "../Button/Button.module.css";
import inputStyles from "../Inputs/Input/Input.module.css";
import React, { useState } from "react";

import Input from "../Inputs/Input/Input";
import Button from "../Button/Button";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

type SettingsProps = {};

const Settings: React.FC<SettingsProps> = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);
  return (
    <form className={styles.settingsContainer}>
      <fieldset className={styles.section}>
        <legend className={styles.title}>Profile</legend>
        <div className={styles.inputGroup}>
          <Input
            type="text"
            title="Name"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={inputStyles.inputSettings}
          />
          <Input
            type="email"
            title="Email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={inputStyles.inputSettings}
          />
        </div>
      </fieldset>
      <fieldset className={styles.section}>
        <legend className={styles.title}>Password</legend>
        <div className={styles.inputGroup}>
          <Input
            type="password"
            title="Password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={inputStyles.inputSettings}
          />
          <div>
            <Input
              type="password"
              title="New password"
              placeholder="New password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              className={inputStyles.inputSettings}
            />
            <Input
              type="password"
              title="Confirm password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className={inputStyles.inputSettings}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.section}>
        <legend className={styles.title}>Color mode</legend>
        <div className={styles.inputGroupLast}>
          <div className={styles.textGroup}>
            <p>{isLightMode ? "Light" : "Dark"}</p>
            <p>{isLightMode ? "Use the dark theme" : "Use the light theme"}</p>
          </div>
          <div className={styles.switcher}>
            <ThemeSwitcher onClick={() => setIsLightMode(!isLightMode)} />
          </div>
        </div>
      </fieldset>
      <div className={styles.btnGroup}>
        <Button type="reset" className={btnStyles.settingsBtn}>
          Cancel
        </Button>
        <Button type="submit" className={btnStyles.settingsBtn}>
          Save
        </Button>
      </div>
    </form>
  );
};
export default Settings;
