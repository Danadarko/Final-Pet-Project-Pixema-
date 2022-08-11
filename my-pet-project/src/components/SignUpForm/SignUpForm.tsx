import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Inputs/Input/Input";

import styles from "./SignUpForm.module.css";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type SignUpFormProps = {
  onRegistration?: (form: LoginForm) => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onRegistration }) => {
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

export default SignUpForm;
