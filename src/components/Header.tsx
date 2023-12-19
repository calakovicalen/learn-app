import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed z-50 flex w-full justify-center bg-white px-6 py-2.5 sm:place-content-between sm:rounded-md sm:border-[1px] sm:border-neutral-300 sm:px-4 sm:py-2 sm:pr-6 ">
      <i
        className="fa-solid fa-ellipsis fa-2xl absolute left-5.5 top-5.5 sm:hidden"
        style={{ color: "#6355d8", width: "24px", height: "24px" }}
      ></i>
      <img src={logo} alt="Apps logo" />
      <div className="hidden gap-x-2.5 sm:flex">
        <button
          onClick={() => navigate("/login")}
          className="text-sm rounded-md px-3 font-poppins text-primary-500 hover:bg-primary-150 hover:active:bg-primary-200 "
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/join-us")}
          className="text-sm rounded-md bg-primary-500 px-3 font-poppins text-white hover:bg-primary-550 hover:active:bg-primary-600"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

export default Header;
