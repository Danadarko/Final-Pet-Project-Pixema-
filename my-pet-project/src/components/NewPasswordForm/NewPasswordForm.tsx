import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Inputs/Input/Input";
import styles from "./NewPasswordForm.module.css";

type NewPasswordFormProps = {};

const NewPasswordForm: React.FC<NewPasswordFormProps> = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [confirmPasswordClass, setConfirmPasswordClass] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState(false);

  useEffect(() => {
    if (isConfirmPasswordDirty) {
      if (password === confirmPassword) {
        setShowErrorMessage(false);
        setConfirmPasswordClass("button");
      } else {
        setShowErrorMessage(true);
        setConfirmPasswordClass("invalidButton");
      }
    }
  }, [confirmPassword]);

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>New password</legend>
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
          placeholder="Confirm your password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setIsConfirmPasswordDirty(true);
          }}
          value={confirmPassword}
        />
        {showErrorMessage && isConfirmPasswordDirty ? (
          <p className={styles.errorMessage}> Passwords did not match. </p>
        ) : (
          ""
        )}
        <Button
          disabled={showErrorMessage && isConfirmPasswordDirty}
          type="submit"
          className={
            showErrorMessage && isConfirmPasswordDirty
              ? styles.disabledButton
              : ""
          }
        >
          Set password
        </Button>
      </fieldset>
    </form>
  );
};

export default NewPasswordForm;
