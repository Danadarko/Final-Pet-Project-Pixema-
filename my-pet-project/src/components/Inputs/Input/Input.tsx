import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  type: "text" | "email" | "password" | "file";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  value?: string;
  placeholder: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, title, value, placeholder }, ref) => {
    return (
      <label className={styles.label}>
        {title}
        <input
          ref={ref}
          required
          type={type}
          onChange={onChange}
          value={value}
          className={styles.input}
          placeholder={placeholder}
        />
      </label>
    );
  }
);

export default Input;
