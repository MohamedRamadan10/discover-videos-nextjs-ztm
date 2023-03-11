import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import defaultImg from "@/public/default.png";
import { card, large, medium, small, btn } from "./card.module.scss";

function Card({ imgUrl = defaultImg, size = "medium", el }) {
	const imgSize = { large, medium, small };
	const scale = el === 0 ? { scaleY: 1.05 } : { scale: 1.05 };

	return (
		<motion.div
			el={el.toString()}
			className={`${card} ${imgSize[size]}`}
			whileHover={{
				...scale,
			}}
			transition=".3"
		>
			<Image
				src={imgUrl || defaultImg}
				fill
				sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
				alt="Name"
				priority
			/>
			<Button className={btn} />
		</motion.div>
	);
}

export default Card;
