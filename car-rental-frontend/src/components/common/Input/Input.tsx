import "./Input.css";
import { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="input-field">

      <label>{label}</label>

      <div className="input-wrapper">

        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        )}

      </div>

    </div>
  );
};

export default Input;