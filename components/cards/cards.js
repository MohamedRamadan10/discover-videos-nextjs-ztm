import { Bebas_Neue } from "next/font/google";
import Card from "@/components/card/card";
import { cards, heading, cardsWrapper } from "./cards.module.scss";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const handleWheelX = (e) => {
  const strength = Math.abs(e.deltaY);
  if (e.deltaY === 0) return;

  const el = e.currentTarget;
  if (
    !(el.scrollLeft === 0 && e.deltaY < 0) &&
    !(
      el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
      e.deltaY > 0
    )
  ) {
    e.preventDefault();
  }
  el.scrollTo({
    left: el.scrollLeft + e.deltaY,
    behavior: strength > 70 ? "auto" : "smooth",
  });
};

function Cards({ title, size }) {
  return (
    <div className={cards}>
      <div className="container">
        <div className={`${heading} ${bebasNeue.className}`}>{title}</div>
        <div className={cardsWrapper} onWheel={handleWheelX}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Card
              imgUrl="https://rare-gallery.com/uploads/posts/538616-peaky-blinders.jpg"
              size={size}
              key={i}
              el={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
