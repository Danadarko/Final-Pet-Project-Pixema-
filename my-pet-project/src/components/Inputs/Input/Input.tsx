import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  type: "text" | "email" | "password" | "file";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  value?: string;
  placeholder: string;
  className?: string;
  required?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, title, value, placeholder, className, required }, ref) => {
    return (
      <label className={styles.label}>
        {title}
        <input
          ref={ref}
          type={type}
          onChange={onChange}
          value={value}
          className={`${styles.input} ${className}`}
          placeholder={placeholder}
          required={required}
        />
      </label>
    );
  }
);

export default Input;
