import { Outlet } from "react-router-dom";

import { Logo } from "./assets/icons/logo";

import "./App.css";

function App() {
  return (
    <div className="AuthLayout w-full pt-[80px] md:pt-[180px] px-3 md:px-0">
      <Logo className="CompanyLogo" />

      <div className="w-full md:w-[400px]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
