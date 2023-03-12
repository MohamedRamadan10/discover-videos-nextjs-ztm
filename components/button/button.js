import { Roboto } from "next/font/google";
import { btn } from "./button.module.scss";
import { Play } from "react-feather";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

function Button({ className, btnText, submit }) {
  return (
    <button
      className={`${btn} ${className ? className : ""}`}
      type={submit ? "submit" : "button"}
    >
      <Play />
      {btnText && <span className={roboto.className}>{btnText}</span>}
    </button>
  );
}

export default Button;
