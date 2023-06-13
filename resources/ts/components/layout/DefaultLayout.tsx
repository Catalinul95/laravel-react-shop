import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Notifications from "../Notifications";

const DefaultLayout:React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      <Navbar />
      <main className="w-full xl:w-11/12 mt-[120px] mx-auto px-4">
        <Outlet/>
      </main>
      <Footer />
        <Notifications />
    </div>
  )
};

export default DefaultLayout;
