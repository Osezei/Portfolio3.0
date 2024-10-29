"use client";
import React from "react";
import Container from "../Container";
import Button from "../Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Container>
      <main id="#home" className="h-screen flex items-center">
        <div>
          <div className="text-5xl lg:text-7xl font-normal">
            <h3 className="">JOHN IKHIMIOYA</h3>
            <h3>FRONTEND DEVELOPER</h3>
          </div>
          <div className="">
            <p className="mt-3 font-normal text-[14px] lg:text-[20px] w-full md:w-[50%]">
              I create interactive and responsive web applications using modern
              technologies.
            </p>
            <div className="mt-2 lg:mt-5">
              <Link to="#work" smooth={true} offset={50} duration={500}>
                <Button>Say Hello</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Hero;
