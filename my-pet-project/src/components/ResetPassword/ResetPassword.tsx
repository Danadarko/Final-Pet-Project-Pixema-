import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Inputs/Input/Input";
import styles from "./ResetPassword.module.css";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>Reset Password</legend>
        <Input
          title="Email"
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button type="submit">Reset</Button>
      </fieldset>
    </form>
  );
};

export default ResetPassword;
