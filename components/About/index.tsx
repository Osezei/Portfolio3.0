import React from "react";
import Container from "../Container";
import Image from "next/image";
import Me from "../../public/assets/images/mee.jpeg";
import HeadingTopic from "../HeadingTopic";
import Button from "../Button";

const About = () => {
  return (
    <div id="#about" className="my-10">
      <Container>
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
              <a
                href="https://docs.google.com/document/d/1wowLk6ZhchDwcbaiT3sVRp1_xxYtJJ_DMYk5xt9tHf4/edit?usp=drive_link"
                target="_blank"
              >
                <Button>Resume</Button>
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src={Me}
              alt="John Ikhimioya"
              className="hidden md:block object-contain border-black border-2"
              width={470}
              height={470}
            />
            <Image
              src={Me}
              alt="John Ikhimioya"
              className="md:hidden object-contain border-black border-2"
              width={360}
              height={360}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
