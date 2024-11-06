import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
//import { usePathname } from "next/navigation";

const Layout = ({ children }: any) => {
  //const pathname = usePathname();
  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
