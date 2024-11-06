"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Typo from "../Typography";
import { Link } from "react-scroll";
import { menuSlide } from "../Animation/Anim";
import { motion } from "framer-motion";
import LinkIndex from "../Link";
import { FaArrowUp } from "react-icons/fa";

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

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const scrollHeight = 100; // Change this value to set the scroll height

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <nav className="flex justify-between items-center my-5 lg:my-10">
          <Typo
            transform="none"
            as="p"
            weight="font-bold"
            className="text-black text-xl"
          >
            Osezei
          </Typo>

          {/* laptop menu */}
          <div className="hidden lg:flex gap-5 ">
            {navItems.map(({ href, title }) => {
              return (
                <Link
                  to={href}
                  smooth={true}
                  duration={500}
                  key={title}
                  className=""
                >
                  <Typo
                    transform="none"
                    as="p"
                    weight="font-normal"
                    className="text-black nav-links cursor-pointer"
                  >
                    {title}
                  </Typo>
                </Link>
              );
            })}
          </div>
          {/* end of laptop menu */}
          {/* mobile view */}
          <div className="lg:hidden">
            <button
              className="text-sm font-bold"
              onClick={() => {
                setIsActive(!isActive);
                // console.log(isActive);
              }}
            >
              Menu.
            </button>
          </div>
          {/* end of mobile view */}
        </nav>
      </Container>

      <div>
        {/* scroll button */}
        {visible && (
          <button
            className="text-white z-50 bg-black p-2 text-2xl lg:text-3xl fixed bottom-[20px] right-[20px] lg:bottom-[40px] lg:right-[40px]"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        )}
        {/* end of scroll button */}
        {/* mobile menu */}
        <AnimatePresence mode="wait">
          <div className="fixed h-full top-0 left-0 w-[50%] z-30 lg:hidden">
            {isActive && <Nav setIsActive={setIsActive} />}
          </div>
        </AnimatePresence>
        {/* end of mobile menu */}
      </div>
    </>
  );
};

export default Navigation;
