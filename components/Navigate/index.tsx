"use client";
import React, { useState } from "react";
import { navData } from "@/utils/data";
import Link from "next/link";
import { useLenis } from "@/app/context/LenisContext";
import Container from "../Container";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./mobileMenu";

const Logo = () => {
  return (
    <Link href={`/`}>
      <h1 className="text-[18px] lg:text-[20px] font-bold">
        Osez
        <span className="opacity-50">ei</span>
      </h1>
    </Link>
  );
};

export const ResumeButton = () => {
  return (
    <Link
      href="https://docs.google.com/document/d/1wowLk6ZhchDwcbaiT3sVRp1_xxYtJJ_DMYk5xt9tHf4/edit?usp=drive_link"
      target="_blank"
    >
      <button className="button">
        <span>Resume</span>
      </button>
    </Link>
  );
};

interface NavItemsProps {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItems = ({ setMobileMenu }: NavItemsProps) => {
  const lenis = useLenis();
  return (
    <>
      {navData.map(({ title, href }) => {
        return (
          <Link
            href={href}
            key={title}
            onClick={() => {
              lenis?.scrollTo(`${href}`);
              setMobileMenu(false);
            }}
            className="text-[16px] font-semibold nav-links"
          >
            {title}
          </Link>
        );
      })}
    </>
  );
};

const Navigate = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Container>
      <section className="flex items-center justify-between my-5">
        <Logo />
        <div className="hidden md:flex items-center gap-5">
          <NavItems setMobileMenu={setMobileMenu} />
          <ResumeButton />
        </div>
        {/* menu button */}
        <div className="md:hidden">
          <button
            className="text-[16px] font-bold"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            Menu
            <span className="opacity-50">.</span>
          </button>
        </div>
        {/* end of menu button */}
      </section>

      {/* mobile menu */}
      <AnimatePresence mode="wait">
        <div className="">
          {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
        </div>
      </AnimatePresence>
      {/* end of mobile menu */}
    </Container>
  );
};

export default Navigate;
