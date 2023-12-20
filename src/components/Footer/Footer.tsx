import { useState } from "react";

import Select from "../ui/Select";
import FooterList from "./FooterList";

import logo from "../../assets/logo.png";
import Divider from "../ui/Divider";

function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <footer className="xl:gap-y-s7 xl:grid-cols-footer xl:gap-x-s16 xl:grid-rows-footer flex flex-col items-center justify-center bg-neutral-100 px-12 py-5 xl:grid xl:px-36 xl:pt-24">
      <img src={logo} className="col-auto hidden self-start xl:block" />
      <div className="mb-s13 gap-s6 xl:gap-s15 flex w-full flex-col sm:flex-row sm:justify-between xl:mb-0">
        <FooterList heading="Product" list={["Features", "Pricing"]} />
        <FooterList
          heading="Resources"
          list={["Blog", "User guides", "Webinars"]}
        />
        <FooterList heading="Company" list={["About us", "Contact us"]} />
      </div>

      <Select options={["English", "Serbian"]} />

      <div className="mt-s13 gap-s6 flex xl:col-start-3 xl:row-start-3 xl:mt-0 xl:justify-self-end">
        <i
          className="fa-brands fa-facebook h-5 w-5 cursor-pointer"
          style={{ color: "#6355d8" }}
        ></i>
        <i
          className="fa-brands fa-youtube h-5 w-5 cursor-pointer"
          style={{ color: "#6355d8" }}
        ></i>
        <i
          className="fa-brands fa-twitter h-5 w-5 cursor-pointer"
          style={{ color: "#6355d8" }}
        ></i>
      </div>

      <div className="mt-s14 gap-s5 flex flex-col xl:col-start-3 xl:row-start-1 xl:mt-0 xl:self-start">
        <h4 className="font-heading text-t6 font-bold text-primary-500">
          Subscribe to our newsletter
        </h4>
        <p className="font-body text-t2 text-neutral-650">
          For product annoucments and exclusive insights
        </p>

        <div className="mb-s11 h-Sz10 rounded-m xl:w-Sz22 relative flex justify-between overflow-hidden border border-neutral-500 xl:mb-0">
          <i
            className="fa-regular fa-envelope absolute left-2.5 top-2.5"
            style={{ color: "#171717", width: "16px", height: "16px" }}
          ></i>
          <input
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={handleChange}
            className="rounded-l-m p-s1 pl-s10 font-body h-full w-full text-sm outline-none"
          />
          <button className="text-t3 h-full rounded-r-md bg-primary-500 px-3 font-poppins  text-white xl:w-28 ">
            Subscribe
          </button>
        </div>
      </div>

      <p className="font-body text-t3 xl:ml-s18 text-neutral-650 xl:justify-self-center">
        &copy; 2023 Learn, Inc. &middot; Privacy &middot; Terms
      </p>

      <Divider />
    </footer>
  );
}

export default Footer;
