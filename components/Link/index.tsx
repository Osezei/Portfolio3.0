import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { scale, slide } from "../Animation/Anim";

export default function LinkIndex({
  data,
  isActive,
  setIsActive,
}: //setIsActive,
//setSelectedIndicator,
any) {
  const { title, href, index } = data;

  return (
    <motion.div
      // onMouseEnter={() => {
      //   setSelectedIndicator(href);
      // }}
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
        to={href}
        smooth={true}
        duration={500}
        onClick={() => {
          setIsActive(false);
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
}
