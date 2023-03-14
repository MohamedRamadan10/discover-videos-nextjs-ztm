import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navabr";
import "@/styles/globals.scss";
import { magicAuth } from "@/lib/magic-auth";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	const userLogin = async () => {
		const isLoggedIn = await magicAuth.user.isLoggedIn();

		if (isLoggedIn) {
			router.push("/");
		} else {
			router.push("/login");
		}
	};

	useEffect(() => {
		userLogin();
	}, []);

	useEffect(() => {
		const handleComplete = () => setIsLoading(false);

		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	return isLoading ? (
		<div className="parent__loader">
			<span className="loader"></span>
		</div>
	) : (
		<main className={roboto.className}>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
