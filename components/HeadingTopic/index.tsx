import React from "react";

type HeadingProps = {
  text?: string;
};

const HeadingTopic: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="mb-10">
      <h1 className="text-xl lg:text-3xl">{text}</h1>
      <div className="bg-black h-1 w-[50px] lg:w-[70px] mt-2"></div>
    </div>
  );
};

export default HeadingTopic;
