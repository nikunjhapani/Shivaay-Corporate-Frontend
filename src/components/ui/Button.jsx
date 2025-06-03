import React from "react";
import ArrowIcon from "./ArrowIcon";

const Button = ({
  children,
  icon = true,
  iconColor = "black",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const baseStyles = "button -type-1";

  const variantStyles = {
    primary: "",
    secondary: "",
    outline: "bg-transparent border-2 hover:text-black",
  };

  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-8",
    lg: "py-4 px-10 text-lg",
  };
  const ArrowColor = {
    white: "#fff",
    black: "#122223",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="-icon">
          <ArrowIcon color={iconColor} />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
