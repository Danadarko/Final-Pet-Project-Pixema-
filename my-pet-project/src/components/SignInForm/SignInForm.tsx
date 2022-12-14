import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import Button from "../Button/Button";
import Input from "../Inputs/Input/Input";

import styles from "./SignInForm.module.css";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type SignInProps = {
  onLogin?: (form: LoginForm) => boolean;
};

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>Sign In</legend>
        <Input
          title="Email"
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          title="Password"
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p className={styles.caption}>Forgot your password?</p>
        <Button type="submit">Sign in</Button>
        <p className={styles.text}>
          Don’t have an account?{" "}
          <Link to={AppPages.REGISTRATION} className={styles.link}>
            Sign up
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default SignIn;
