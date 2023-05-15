
"use client"
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        border-2
        hidden 
        sm:flex
        text-sm
        justify-center 
        items-center
        sm:text-sm 
        duration-150 
        transition-all
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-white' : 'bg-[#292929]'}
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'border-black' : 'border-[#292929]'}
        ${large ? 'text-xl' : 'text-xs'}
        ${large ? 'px-5' : 'px-2'}
        ${large ? 'py-3' : 'py-1'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-white' : ''}
        ${outline ? 'text-white' : ''}
      `}
    >
      {label}
    </button>
  );
}

export default Button;