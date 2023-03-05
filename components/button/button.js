import { Roboto } from "next/font/google";
import { btn } from "./button.module.scss";
import { Play } from "react-feather";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

function Button({ videoTitle, className }) {
  return (
    <button className={`${btn} ${className}`}>
      <Play />
      {videoTitle && <span className={roboto.className}>Play Trailer</span>}
    </button>
  );
}

export default Button;
