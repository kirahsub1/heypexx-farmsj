import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ className, variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none";
  
  const variantStyles = {
    primary: "bg-[#46A908] text-white hover:bg-transparent hover:text-green-700  rounded-full shadow-lg hover:bg-opacity-100",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props} />
  );
};
