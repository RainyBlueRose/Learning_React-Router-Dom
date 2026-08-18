import React from "react";
import MainNav from "../components/mainNav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
