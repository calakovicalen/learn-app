import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
