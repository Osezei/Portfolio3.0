import React from "react";
import Container from "../Container";
import Typo from "../Typography";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export const socialLinks: any[] = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Osezei",
  },
  {
    icon: <FaTwitter />,
    href: "https://www.twitter.com/osezei",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/john-ikhimioya-652b071a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoQ8oXJKrRvG8ZloZME0G1A%3D%3D",
  },
];

const Footer = () => {
  return (
    <Container>
      <div
        id="#contact"
        className="text-white my-12 lg:my-20 flex items-center justify-between"
      >
        <Typo as="p" weight="font-normal">
          Created with love by me, Osezei
        </Typo>
        <div className="flex gap-4 lg:gap-10">
          {socialLinks.map(({ icon, href, index }) => {
            return (
              <Link
                href={href}
                key={index}
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
