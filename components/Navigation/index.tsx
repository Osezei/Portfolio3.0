"use client";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Typo from "../Typography";

const Navigation = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <nav className="">
        <div className="ml-[20px] my-[30px]">
          <Link href="/" className="text-xl">
            <Typo
              transform="none"
              as="p"
              weight="font-bold"
              className="text-black"
            >
              Osezei
            </Typo>
          </Link>
        </div>
        <section>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </section>
      </nav>
      <AnimatePresence mode="wait">
        <div className="absolute top-0 right-0 w-[50%]">
          {isActive && <Nav />}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Navigation;
