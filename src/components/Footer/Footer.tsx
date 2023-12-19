import FooterList from "./FooterList";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-100 px-12 py-5">
      <div className="mb-12 flex flex-col gap-5">
        <FooterList heading="Product" list={["Features", "Pricing"]} />
        <FooterList
          heading="Resources"
          list={["Blog", "User guides", "Webinars"]}
        />
        <FooterList heading="Company" list={["About us", "Contact us"]} />
      </div>

      <select className="bg-neutral-250 text-sm rounded-md py-1 pl-3 pr-8 font-poppins outline-none focus:bg-white">
        <option>English</option>
        <option>Serbian</option>
      </select>

      <div>
        <i className="fa-brands fa-facebook" style={{ color: "#6355d8" }}></i>
        <i className="fa-brands fa-youtube" style={{ color: "#6355d8" }}></i>
        <i className="fa-brands fa-twitter" style={{ color: "#6355d8" }}></i>
      </div>

      <div>
        <h4>Subscribe to our newsletter</h4>
        <p>For product annoucments and exclusive insights</p>
        <div>
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <p>&copy; 2023 Learn, Inc. &middot; Privacy &middot; Terms</p>
    </footer>
  );
}

export default Footer;
