import React from "react";
import { Inter } from "next/font/google";

type Type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const VARIANT_Styles: Record<Type, string> = {
  h1: "text-[36px]",
  h2: "text-[36px] md:text-[64px]",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-lg",
  p: "text-sm md:text-[24px]",
};
const inter = Inter({ subsets: ["latin"] });
type Weight =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";

type Transforms = "none" | "capitalize" | "uppercase" | "lowercase";

const VARIANT_Transforms: Record<Transforms, string> = {
  none: "inherit",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

interface Props {
  children: React.ReactNode;
  as?: Type;
  looksLike?: Type;
  weight?: Weight;
  transform?: Transforms;
  className?: string;
}

const Typo = ({
  children,
  className,
  as = "p",
  looksLike = as,
  weight,
  transform = "none",
}: Props) => {
  const TagName = as as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${VARIANT_Transforms[transform]}
        ${weight}
        ${inter.className}
        ${className}
        
      `}
    >
      {children}
    </TagName>
  );
};

export default Typo;
