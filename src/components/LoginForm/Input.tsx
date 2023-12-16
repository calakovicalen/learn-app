import { ReactNode, ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
  secondIcon?: ReactNode;
  setIsVisible?: () => void;
  value: string;
  onChange: (value: string) => void;
}

function Input(props: InputProps) {
  const { type, label, placeholder, icon, secondIcon, value, onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label className="font-poppins font-bold font-xs">{label}</label>
      <div className="flex flex-col relative mb-3.5 ">
        {icon}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="outline-none px-11 h-11 font-poppins font-normal font-base bg-neutral-200 rounded-md hover:text-neutral-900 focus:text-neutral-900 focus:bg-white"
        />
        {secondIcon}
      </div>
    </>
  );
}

export default Input;
