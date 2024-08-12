import { inputProps } from "@/types/type";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className="px-2 py-1 rounded-sm border"
    />
  );
};

export default Input;
