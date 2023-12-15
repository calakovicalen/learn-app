import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Trainings from "./pages/Trainings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
