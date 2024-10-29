import React from "react";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

type ProjectLinksProps = {
  title?: string;
  link?: string;
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ title, link }) => {
  return (
    <div className="flex justify-between items-center pt-[8px]">
      <p className="font-[500px] text-[15px] md:text-[24px]">{title}</p>
      <Link
        href={`${link}`}
        target="_blank"
        className="text-[16px] md:text-[25px]"
      >
        <div className="lg:hover:rotate-90 transition ease-in-out">
          <BsArrowUpRightCircle />
        </div>
      </Link>
    </div>
  );
};

export default ProjectLinks;
