import { Magic } from "magic-sdk";

const magic = () => {
	return (
		typeof window !== "undefined" &&
		new Magic(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY)
	);
};

export const magicAuth = magic();
