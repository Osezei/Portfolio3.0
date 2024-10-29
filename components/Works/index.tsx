import React from "react";
import ProjectLinks from "../ProjectLinks";
import { project } from "@/utils/data";
import Image from "next/image";
import Container from "../Container";
import PictureContainer from "../PictureContainer";
import HeadingTopic from "../HeadingTopic";
import Button from "../Button";

const Works = () => {
  return (
    <Container>
      <section id="#work" className="">
        <HeadingTopic text="Projects" />
        {/* laptop screen */}
        <div className="hidden xl:flex gap-[28px] justify-center flex-col lg:flex-row lg:flex-wrap">
          {/* first container */}

          {project.slice(0, 1).map((item, id) => (
            <div
              key={id}
              className="w-[328px] h-[343px]  mx-auto lg:min-h-[432px] lg:min-w-[501px] lg:grow lg:hover transition-all ease-in-out duration-300 "
            >
              <div className="relative w-full h-[90%] object-contain">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="h-[10%]">
                <ProjectLinks title={`${item?.title}`} link={`${item?.url}`} />
              </div>
            </div>
          ))}
          {/* end of first container */}
          {/* second container */}
          {project.slice(1, 2).map((item, id) => (
            <div
              key={id}
              className="w-[328px] h-[343px] mx-auto lg:h-[330px] lg:w-[501px] lg:grow-0 hover:grow hover:lg:h-[432px] rounded-[16px] transition-all ease-in-out duration-300 "
            >
              <div className="relative w-full h-[90%] object-contain">
                <Image
                  src={item.image}
                  alt={item?.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="h-[10%]">
                <ProjectLinks title={`${item?.title}`} link={`${item?.url}`} />
              </div>
            </div>
          ))}
          {/* end of second container */}
        </div>
        {/* end of laptop screen */}
        {/* mobile and tablet screen */}
        <div className="xl:hidden flex gap-[28px] justify-center flex-col">
          {/* first container */}

          {project.slice(0, 1).map((item, id) => (
            <div key={id} className="w-full h-[343px]">
              <div className="relative w-full h-[90%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-top"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="h-[10%]">
                <ProjectLinks title={`${item?.title}`} link={`${item?.url}`} />
              </div>
            </div>
          ))}
          {/* end of first container */}
          {/* second container */}
          {project.slice(1, 2).map((item, id) => (
            <div key={id} className="w-full h-[343px]">
              <div className="relative w-full h-[90%]">
                <Image
                  src={item.image}
                  alt={item?.title}
                  className="object-cover object-top"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="h-[10%]">
                <ProjectLinks title={`${item?.title}`} link={`${item?.url}`} />
              </div>
            </div>
          ))}
          {/* end of second container */}
        </div>
        {/* mobile and tablet screen */}
        {/* third none responsive container */}
        <div className="mt-[56px]">
          {project.slice(2, 3).map((item, id) => (
            <div key={id}>
              <PictureContainer source={item.image} title={item?.title} />
              <ProjectLinks title={`${item?.title}`} link={`${item?.url}`} />
            </div>
          ))}
        </div>
        <div className="my-10 flex justify-start md:justify-center">
          <a href="https://github.com/Osezei" target="_blank">
            <Button>See more</Button>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Works;
