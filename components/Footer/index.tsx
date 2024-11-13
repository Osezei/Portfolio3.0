import React from "react";
import Container from "../Container";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Wat from "../WAT";

export const socialLinks: any[] = [
  {
    id: 1,
    icon: <FaGithub />,
    href: "https://github.com/Osezei",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    href: "https://www.twitter.com/osezei",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/john-ikhimioya-652b071a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoQ8oXJKrRvG8ZloZME0G1A%3D%3D",
  },
];

const Footer = () => {
  return (
    <Container>
      <div
        id="contact"
        className="text-white py-12 lg:py-20 flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-center justify-between"
      >
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <h3 className="">JOHN IKHIMIOYA</h3>
          <h3>FRONTEND DEVELOPER</h3>
          <div className="text-xl font-normal mt-5">
            <p>Port Harcourt, NG</p>
            <Wat />
          </div>
        </div>

        <div className="flex gap-4 lg:gap-10">
          {socialLinks.map(({ icon, href, id }) => {
            return (
              <Link
                href={href}
                key={id}
                target="_blank"
                className="text-xl lg:text-2xl"
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
