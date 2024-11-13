import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "../Animation/Anim";
import { useLenis } from "@/app/context/LenisContext";

export default function LinkIndex({ data, isActive, setMobileMenu }: any) {
  const { title, href, index } = data;
  const lenis = useLenis();

  return (
    <motion.div
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={!isActive ? "open" : "closed"}
      ></motion.div>
      <Link
        href={href}
        key={index}
        onClick={() => {
          lenis?.scrollTo(`${href}`);
          setMobileMenu(false);
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
}
