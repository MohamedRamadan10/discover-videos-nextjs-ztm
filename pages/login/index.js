import Image from "next/image";
import { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/router";
import Seo from "@/components/seo/seo";
import {
	login,
	form,
	heading,
	formControl,
	errorMsg,
} from "@/styles/login.module.scss";
import loginBg from "@/public/login-bg.jpg";
import Button from "@/components/button/button";
import { magicAuth } from "@/lib/magic-auth";

const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
});

export default function Login() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [userMsg, setUserMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handleComplete = () => setIsLoading(false);

		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	const handleOnChangeEmail = (e) => {
		const email = e.target.value;
		if (email === "") {
			setIsLoading(false);
			setEmail("");
		} else {
			setEmail(email);
			setUserMsg("");
		}
	};

	const handleLoginWithEmail = async () => {
		setIsLoading(true);
		if (email) {
			try {
				const token = await magicAuth.auth.loginWithMagicLink({ email });
				if (token) {
					router.push("/");
				}
			} catch (err) {
				setIsLoading(false);
				console.log(err);
			}
		} else {
			setUserMsg("Please enter your email");
			setIsLoading(false);
		}
	};

	return (
		<>
			<Seo title="Login" />
			<div className={login}>
				<Image
					src={loginBg}
					alt="login"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className={form}>
					<div className={`${heading} ${bebasNeue.className}`}>
						<h1>Sign In</h1>
					</div>
					<input
						type="email"
						name="email"
						id="email"
						className={formControl}
						placeholder="Email Address"
						value={email}
						onChange={handleOnChangeEmail}
					/>
					{userMsg && <p className={errorMsg}>{userMsg}</p>}
					<Button
						btnText={isLoading ? "Loading..." : "Login"}
						className="mx-auto"
						submit
						onClick={handleLoginWithEmail}
					/>
				</div>
			</div>
		</>
	);
}
