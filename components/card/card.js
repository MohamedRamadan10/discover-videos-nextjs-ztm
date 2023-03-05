import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import defaultImg from "@/public/default.png";
import { card, large, medium, small, btn } from "./card.module.scss";

function Card({ imgUrl = defaultImg, size = "medium" }) {
  const imgSize = { large, medium, small };

  return (
    <motion.div
      className={`${card} ${imgSize[size]}`}
      whileHover={{
        scale: 1.1,
      }}
      transition=".3"
    >
      <Image src={imgUrl || defaultImg} fill={true} alt="Name" />
      <Button className={btn} />
    </motion.div>
  );
}

export default Card;
