
"use client"
interface ButtonProps {
  label: string;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  buttonType: 'update' | 'delete' | 'success' | 'warning' | 'danger' | 'cancel' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  onClick,
  large,
  disabled,
  buttonType,
}) => {

  const getButtonStyles = (): string => {
    switch (buttonType) {
      case 'update':
        return 'bg-blue-600 text-white';
      case 'delete':
        return 'bg-red-600 text-white';
      case 'success':
        return 'bg-green-600 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'danger':
        return 'bg-black text-white';
      case 'cancel':
        return 'bg-gray-900 text-white';
      case 'submit':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-400 text-black';
    }
  };



  return (

    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        border-1 
        sm:flex
        text-sm
        justify-center 
        font-normal
        items-center
        duration-150 
        transition-all
        px-3
        py-2
        ${getButtonStyles()}
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${large ? 'text-xl' : 'text-xs'}
        ${large ? 'px-5' : 'px-2'}
        ${large ? 'py-3' : 'py-1'}
      `}
    >
      {label}
    </button>
  );
}

export default Button;