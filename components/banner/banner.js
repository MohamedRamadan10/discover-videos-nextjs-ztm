import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Button from "@/components/button/button";
import {
  banner,
  heading,
  desc,
  bg,
  container,
  data,
  btn,
} from "./banner.module.scss";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function Banner({ title, subTitle, imgUrl }) {
  return (
    <div className={banner}>
      <div className={`container ${container}`}>
        <div className={data}>
          <div className={`${heading} ${bebasNeue.className}`}>{title}</div>
          <div className={desc}>{subTitle}</div>
          <div className={btn}>
            <Button btnText="Play Trailer" />
          </div>
        </div>
      </div>
      <div className={bg}>
        <Image
          src={imgUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
