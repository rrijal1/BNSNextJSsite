import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseClassName = "btn";
  const variantClassName = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    tertiary: "btn-tertiary",
  }[variant];
  const sizeClassName = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  }[size];

  return (
    <button
      className={clsx(
        baseClassName,
        variantClassName,
        sizeClassName,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
