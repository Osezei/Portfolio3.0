import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../Animation/Anim";
// import Link from "next/link";
import Typo from "../Typography";
import LinkIndex from "../Link";

export const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Nav = ({ setIsActive }: any) => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div>
        <div className="flex flex-col bg-black h-screen text-red-50 items-center justify-center gap-5 md:gap-10">
          {navItems.map((data, index) => {
            return (
              <LinkIndex
                key={index}
                data={{ ...data, index }}
                setIsActive={setIsActive}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Nav;
