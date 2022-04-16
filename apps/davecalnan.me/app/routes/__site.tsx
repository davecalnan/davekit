import { Outlet } from "@remix-run/react";
import { Navbar } from "~/core/Navbar";

const SiteLayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default SiteLayout;
