import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Inputs/Input/Input";

import styles from "./SignUp.module.css";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type SignUp = {
  onRegistration?: (form: LoginForm) => void;
};

const SignUp: React.FC<SignUp> = ({ onRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>Sign Up</legend>
        <Input
          title="Name"
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
        <Input
          title="Confirm password"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit">Sign up</Button>
        <p className={styles.text}>
          Already have an account? <span>Sign In</span>
        </p>
      </fieldset>
    </form>
  );
};

export default SignUp;
