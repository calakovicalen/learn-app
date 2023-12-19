import { useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";

interface SelectProps {
  options: string[];
}

function Select({ options }: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState<string | undefined>(options[0]);

  const handleSelect = (value: string) => {
    setValue(value);
    setIsVisible(false);
  };

  return (
    <div>
      <div
        className="text-sm flex w-32 cursor-pointer items-center justify-between rounded-md bg-neutral-250 px-3 py-2 font-poppins hover:bg-white"
        onClick={() => setIsVisible(!isVisible)}
      >
        {value} <ArrowDown />
      </div>
      {isVisible && (
        <ul className="mt-1 rounded-md bg-neutral-250 text-center font-poppins">
          {options.map((item) => (
            <li
              className="cursor-pointer hover:bg-white"
              key={item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
