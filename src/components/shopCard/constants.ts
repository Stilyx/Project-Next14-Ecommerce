import { IPaths } from "@/models/interfaces";
import earphone from "@images/images/section-shop/earphone.png";
import headphone from "@images/images/section-shop/headphone.png";
import speaker from "@images/images/section-shop/speaker.png";

export const shopPaths: IPaths[] = [
	{
		pathName: "HEADPHONES",
		path: "/category/headphones",
		icon: headphone,
	},
	{
		pathName: "SPEAKERS",
		path: "/category/speakers",
		icon: speaker,
	},
	{
		pathName: "EARPHONES",
		path: "/category/earphones",
		icon: earphone,
	},
];
