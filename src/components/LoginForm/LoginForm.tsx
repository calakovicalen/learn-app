import { useState, MouseEventHandler } from "react";

import Input from "./Input";

import UserIcon from "../../assets/icons/UserIcon";
import LockIcon from "../../assets/icons/LockIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();

    if (name && password) {
      console.log("Form valid");
      setName("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <form className="w-85">
      <Input
        onChange={handleNameChange}
        value={name}
        label="User name"
        placeholder="Enter name"
        icon={<UserIcon />}
        type="text"
      />
      <Input
        onChange={handlePasswordChange}
        value={password}
        label="Password"
        placeholder="Enter password"
        icon={<LockIcon />}
        secondIcon={<EyeIcon onClick={handleIsVisible} isVisible={isVisible} />}
        type={isVisible ? "text" : "password"}
      />

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={name && password ? false : true}
          className="disabled:cursor-not-allowed mb-[1.8125rem] py-3 w-full text-white bg-primary-500 text-base font-poppins font-normal rounded-md hover:bg-primary-550 active:bg-primary-600 disabled:opacity-40"
        >
          Sign In
        </button>
        <p className="font-poppins font-bold font-xs text-neutral-550 mb-[1.125rem]">
          OR
        </p>
        <p className="font-poppins font-sm font-normal text-neutral-900">
          Don't have an account?{" "}
          <span className="text-primary-500 hover:text-primary-550 font-bold">
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
