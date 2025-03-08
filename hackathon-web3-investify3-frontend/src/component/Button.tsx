import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; // Tambahkan properti disabled
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#695192] font-semibold text-white text-sm px-5 py-2 rounded-md shadow-md transition-all 
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "hover:bg-[#775ca6] cursor-pointer"} 
        ${className}`}
    >
      {children}
    </button>
  );
};