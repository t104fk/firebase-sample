import clsx from "clsx";

type Props = {
  onClick: () => void;
  className?: string;
};
const Button: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex justify-center items-center rounded bg-blue text-[#FFFFFF] font-bold h-xl p-sm",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
