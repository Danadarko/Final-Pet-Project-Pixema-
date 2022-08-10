import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
  className?: string;
  id?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  role,
  className = "",
  id,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      role={role}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
