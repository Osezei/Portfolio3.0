import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-[#fff] hover:border-black lg:border-[1px] flex justify-center w-[154px] md:w-[170px] h-[43px] md:h-[56px] relative transition duration-150 ease-in-out">
      <button className="bg-black lg:absolute lg:top-[-10px] lg:left-[-10px] text-[16px] w-full h-full md:w-[170px] md:h-[56px] text-white transition duration-150 ease-in-out">
        {children}
      </button>
    </div>
  );
};

export default Button;
