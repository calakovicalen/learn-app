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

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (name && password) {
      console.log("Form valid");
      setName("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <form className="w-Sz21.5">
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

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={name && password ? false : true}
          className="mt-s7 rounded-m font-body text-t4 mb-s8 w-full bg-primary-500 py-3 font-normal text-white hover:bg-primary-550 active:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Sign In
        </button>
        <p className="font-t2 mb-s5 font-body font-bold text-neutral-550">OR</p>
        <p className="font-t3 font-body font-normal text-neutral-900">
          Don't have an account?{" "}
          <span className="font-bold text-primary-500 hover:text-primary-550">
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
