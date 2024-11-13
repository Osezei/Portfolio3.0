"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import Image from "next/image";
import Me from "../../public/assets/images/mee.jpeg";
import HeadingTopic from "../HeadingTopic";
import Button from "../Button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const animationStart = window.innerWidth > 1000 ? "50%" : "10%";
    const delay =
      (window.innerHeight > 530 && window.innerWidth < 1000) ||
      (window.innerHeight > 1000 && window.innerWidth > 1500)
        ? 1.5
        : 0;
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about",
        start: `${animationStart} bottom`,
      },
      ease: "power4.out",
      duration: 6,
      opacity: 1,
      delay: delay,
    });
  }, []);
  return (
    <Container>
      <section id="about" className="my-10">
        <HeadingTopic text="About Me" />
        <section className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
          <div className="w-full md:max-w-[50%] text-black font-normal text-[14px] lg:text-[16px]">
            <p>
              I’m John Ikhimioya, a passionate and results-driven Frontend
              Developer with expertise in creating responsive, visually
              appealing, and highly functional web applications. With a strong
              foundation in HTML, CSS, JavaScript, and a deep proficiency in
              frameworks like React and Next.js, and I specialize in building
              seamless user experiences that drive engagement.
              <br></br>
              <br></br>
              Currently, I work at BMC as a Frontend Developer, where I
              collaborate with cross-functional teams to deliver innovative
              digital solutions. I am particularly skilled in using Tailwind CSS
              for rapid UI development, ensuring clean, maintainable, and
              scalable code. Whether working on complex projects or new
              features, I am always focused on crafting intuitive and dynamic
              web interfaces that prioritize performance and usability.
              <br></br>
              <br></br>I am continually learning and exploring new technologies
              to stay ahead of the curve and deliver exceptional results.
            </p>
            <div className="mt-5">
              <Link
                href="https://docs.google.com/document/d/1wowLk6ZhchDwcbaiT3sVRp1_xxYtJJ_DMYk5xt9tHf4/edit?usp=drive_link"
                target="_blank"
              >
                <button className="button">
                  <span>Resume</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="">
            {/* <Image
              src={Me}
              alt="John Ikhimioya"
              className="hidden md:block object-contain border-black border-2"
              width={470}
              height={470}
            /> */}
            <Image
              src={Me}
              alt="John Ikhimioya"
              className="lg:hidden object-contain border-black border-2"
              width={360}
              height={360}
            />
          </div>
          <div className="border-black border-[2px] w-[470px] h-[470px] relative hidden lg:block">
            <Image
              src={Me}
              alt="John Ikhimioya"
              className="object-cover border-blac border2 absolute w-[470px] h-[470px] lg:top-[-10px] lg:left-[-10px]"
              width={470}
              height={470}
            />
          </div>
        </section>
      </section>
    </Container>
  );
};

export default About;
