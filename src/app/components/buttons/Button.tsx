'use client';

import React from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  icon?: React.ElementType;
  text?: string;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-green-600",
  textColor = "text-white",
  icon: Icon,
  text = "",
  borderRadius = "rounded-lg",
 
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${borderRadius} w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
