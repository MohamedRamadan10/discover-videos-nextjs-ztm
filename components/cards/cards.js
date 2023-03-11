import { Bebas_Neue } from "next/font/google";
import Slider from "react-slick";
import Card from "@/components/card/card";
import { cards, heading } from "./cards.module.scss";

const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
});

function Cards({ title, size, videos }) {
	const settings = {
		dots: false,
		arrows: false,
		adaptiveHeight: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};

	return (
		<div className={cards}>
			<div className="container">
				<div className={`${heading} ${bebasNeue.className}`}>{title}</div>
				<Slider {...settings}>
					{videos.map((item, i) => (
						<div key={i}>
							<Card size={size} el={i} imgUrl={item.imgUrl} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default Cards;
