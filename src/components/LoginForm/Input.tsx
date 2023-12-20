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
      <label className="font-body font-t2 font-bold">{label}</label>
      <div className="relative flex flex-col ">
        {icon}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="font-t4 pl-s12 h-Sz12 font-body rounded-m mb-s4 bg-neutral-200 pr-5 outline-none hover:text-neutral-900 focus:bg-white focus:text-neutral-900"
        />
        {secondIcon}
      </div>
    </>
  );
}

export default Input;
