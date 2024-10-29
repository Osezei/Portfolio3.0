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

const Nav = ({ isActive, setIsActive }: any) => {
  // const pathname = usePathname();
  // const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div>
        <div
          // onMouseLeave={() => {
          //   setSelectedIndicator(pathname);
          // }}
          className="flex flex-col bg-black h-screen text-red-50 items-center justify-center gap-5 md:gap-10"
        >
          {navItems.map((data, index) => {
            return (
              <LinkIndex
                key={index}
                data={{ ...data, index }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Nav;
//   <Typo
//     as="p"
//     weight="font-semibold"
//     transform="uppercase"
//     className="text-rgba(128, 128, 128, 0.282)"
//   >
//     {data.title}
//   </Typo>;
