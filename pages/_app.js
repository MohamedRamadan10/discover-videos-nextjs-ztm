import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/navabr";
import "@/styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Navbar loginEmail="mramadan@gmail.com" />
      <Component {...pageProps} />
    </main>
  );
}
