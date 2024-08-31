import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { logo } from "./assets";
import AppRoutes from "./router";

const App = () => {
  return (
    <Router>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to={"/create-post"}
          className="font-medium bg-[#6469ff] text-white rounded-md px-4 py-2"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8  px-4 py-8 w-full bg-[#e5e5e5] min-h-[calc(100vh-73px)]">
        <AppRoutes></AppRoutes>
      </main>
    </Router>
  );
};

export default App;
