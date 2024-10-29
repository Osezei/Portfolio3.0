import React from "react";
import Image from "next/image";

type PicContainerProps = {
  source?: any;
  title?: string;
};

const PictureContainer: React.FC<PicContainerProps> = ({ source, title }) => {
  return (
    <>
      <Image
        src={source}
        alt={`${title}`}
        width={1296}
        height={422}
        className="overflow-hidden w-full h-[422px] object-cover hidden lg:block"
      />
      <Image
        src={source}
        alt={`${title}`}
        width={327}
        height={164.5}
        className="overflow-hidden w-full h-[164.5px] object-cover lg:hidden object-center"
      />
    </>
  );
};

export default PictureContainer;
