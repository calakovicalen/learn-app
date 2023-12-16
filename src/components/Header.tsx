import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full px-6 py-2.5 flex justify-center sm:place-content-between sm:px-4 sm:pr-6 sm:py-2 sm:rounded-md sm:border-[1px] sm:border-neutral-300 ">
      <i
        className="fa-solid fa-ellipsis fa-2xl absolute top-5.5 left-5.5 sm:hidden"
        style={{ color: "#6355d8", width: "24px", height: "24px" }}
      ></i>
      <img src={logo} alt="Apps logo" />
      <div className="gap-x-2.5 hidden sm:flex">
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-poppins text-primary-500 px-3 rounded-md hover:bg-primary-150 hover:active:bg-primary-200 "
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/join-us")}
          className="text-sm font-poppins text-white bg-primary-500 px-3 rounded-md hover:bg-primary-550 hover:active:bg-primary-600"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

export default Header;
