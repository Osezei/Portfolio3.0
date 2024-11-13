"use client";
import React from "react";
import Container from "../Container";
import { useLenis } from "@/app/context/LenisContext";
import Link from "next/link";

const Hero = () => {
  const lenis = useLenis();
  return (
    <main id="home" className="my-[200px]">
      <Container>
        <div>
          <div className="text-3xl lg:text-4xl font-bold">
            <h3 className="">JOHN IKHIMIOYA</h3>
            <h3>FRONTEND DEVELOPER</h3>
          </div>
          <div className="">
            <p className="mt-3 font-normal text-[14px] lg:text-[20px] w-full md:w-[45%]">
              I create interactive and responsive web applications using modern
              technologies at <span className="font-semibold">BMC</span>.
            </p>
            <div className="mt-2 lg:mt-5">
              <Link
                href={`#about`}
                onClick={() => {
                  lenis?.scrollTo(`#work`);
                }}
              >
                <button className="button capitalize">
                  <span>see projects</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hero;
