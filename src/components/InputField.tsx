import clsx from "clsx";

interface Props {
  type: "text" | "number" | "password" | "email";
  value: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  type,
  value,
  placeholder,
  className,
  onChange,
  onBlur,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={clsx("border border-gray rounded h-xl p-sm", className)}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputField;
