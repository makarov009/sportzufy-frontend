import { twMerge } from "tailwind-merge";

const ButtonUI = ({ text, onClick, Icon,className,type }) => {
    
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        "relative inline-flex items-center justify-center px-4 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-400 rounded-lg group",
        className
      )}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      
      { Icon ?
        (<span className="relative mr-2">
          <img src={Icon} alt="" className="h-6 w-6" />
        </span>) : null
      }
      <span className="relative">{text}</span>
    </button>
  );
};

export default ButtonUI;
