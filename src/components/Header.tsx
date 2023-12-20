import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="px-s7 py-s4 sm:rounded-m sm:px-s5 sm:py-s3 sm:pr-s7 fixed z-50 flex w-full justify-center bg-white sm:place-content-between sm:border-[1px] sm:border-neutral-300 ">
      <i
        className="fa-solid fa-ellipsis fa-2xl left-s6.5 top-s6.5 absolute sm:hidden"
        style={{ color: "#6355d8", width: "24px", height: "24px" }}
      ></i>
      <img src={logo} alt="Apps logo" />
      <div className="gap-x-s3.5 hidden sm:flex">
        <button
          onClick={() => navigate("/login")}
          className="rounded-m px-s4 font-body text-t3 text-primary-500 hover:bg-primary-150 hover:active:bg-primary-200 "
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/join-us")}
          className="rounded-m px-s4 font-body text-t3 bg-primary-500 text-white hover:bg-primary-550 hover:active:bg-primary-600"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

export default Header;
