import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../Animation/Anim";
import LinkIndex from "../Link";
import { navData } from "@/utils/data";
import { ResumeButton } from ".";

const MobileMenu = ({ setMobileMenu }: any) => {
  const pathname = usePathname();

  return (
    <div className="text-red fixed h-full top-0 left-0 w-[50%] z-30 md:hidden nav">
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <div className="flex flex-col h-screen text-white font-medium text-[15px] items-center justify-center gap-5 md:gap-10">
            {navData.map((data, index) => {
              return (
                <LinkIndex
                  key={index}
                  data={{ ...data, index }}
                  setMobileMenu={setMobileMenu}
                />
              );
            })}
            <div>
              <ResumeButton />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
