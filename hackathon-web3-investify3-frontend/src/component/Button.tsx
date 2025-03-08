interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; 
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#695192] font-semibold text-white text-sm px-5 py-2 rounded-md shadow-md hover:bg-[#775ca6] cursor-pointer transition-all ${className}`}
    >
      {children}
    </button>
  );
}; 