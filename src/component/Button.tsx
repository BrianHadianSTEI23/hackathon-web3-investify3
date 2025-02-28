interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; 
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#967BBB] font-semibold text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-[#8a6ab8] transition-all ${className}`}
    >
      {children}
    </button>
  );
};