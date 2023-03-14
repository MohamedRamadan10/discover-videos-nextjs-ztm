import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import videoLogo from "@/public/video-logo.svg";
import {
	nav,
	leftSide,
	rightSide,
	container,
	active,
	email,
	logout,
	user,
	dropdown,
	listDropdown,
	titleLogo,
	logo,
} from "./navbar.module.scss";
import { ChevronDown, LogOut, User } from "react-feather";
import { magicAuth } from "@/lib/magic-auth";

const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
});

function Navbar() {
	const router = useRouter();

	const [showDropdown, setShowDropdown] = useState(false);
	const [userEmail, setUserEmail] = useState("");

	const getUserEmail = async () => {
		try {
			const { email } = await magicAuth.user.getMetadata();
			setUserEmail(email);
			console.log(email);
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogout = async () => {
		try {
			await magicAuth.user.logout();
			router.push("/login");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUserEmail();
	}, []);

	return (
		<div className={nav}>
			<div className={`${container} container`}>
				<div className={leftSide}>
					<div className={logo}>
						<Image src={videoLogo} width={50} alt="VidFlex" />
						<span className={`${titleLogo} ${bebasNeue.className}`}>
							Vidflex
						</span>
					</div>
					{router.pathname !== "/login" && (
						<>
							<Link
								href="/"
								className={router.pathname === "/" ? `${active}` : ""}
							>
								Home
							</Link>
							<Link
								href="/browse/my-list"
								className={
									router.pathname === "/browse/my-list" ? `${active}` : ""
								}
							>
								My List
							</Link>
						</>
					)}
				</div>
				{router.pathname !== "/login" && (
					<div className={rightSide}>
						<div
							className={email}
							onClick={() => setShowDropdown(!showDropdown)}
						>
							<div className={user} title={userEmail}>
								<User />
								<span> {`${userEmail.slice(0, 10)}...`}</span>
							</div>
							<ChevronDown className={dropdown} />
						</div>
						{showDropdown && (
							<div className={listDropdown}>
								<button className={logout} onClick={handleLogout}>
									<LogOut /> Logout
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
