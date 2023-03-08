import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import defaultImg from "@/public/default.png";
import { card, large, medium, small, btn } from "./card.module.scss";

function Card({ imgUrl = defaultImg, size = "medium", el }) {
  const imgSize = { large, medium, small };
  const scale = el === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <motion.div
      el
      className={`${card} ${imgSize[size]}`}
      whileHover={{
        ...scale,
      }}
      transition=".3"
    >
      <Image src={imgUrl || defaultImg} fill={true} sizes="100vw" alt="Name" />
      <Button className={btn} />
    </motion.div>
  );
}

export default Card;
