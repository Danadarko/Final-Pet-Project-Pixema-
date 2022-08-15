import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
  className?: string;
  id?: string;
  disabled?: boolean | undefined;
  loadingSpinner?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  role,
  className = "",
  id,
  disabled,
  loadingSpinner,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      role={role}
      id={id}
      disabled={disabled}
    >
      {children}
      {loadingSpinner ? <div className={styles.spinner}></div> : null}
    </button>
  );
};

export default Button;
