import { Outlet } from "react-router-dom";

import { Logo } from "./assets/icons/logo";

import "./App.css";

function App() {
  return (
    <>
      <Logo />

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
