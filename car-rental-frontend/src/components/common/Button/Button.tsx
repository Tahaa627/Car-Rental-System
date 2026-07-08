import "./Button.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;