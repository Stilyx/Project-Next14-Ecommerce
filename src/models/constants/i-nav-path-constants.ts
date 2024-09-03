import earphonesIcon from "@images/images/menu/earphones.png";
import headphonesIcon from "@images/images/menu/headphone.png";
import homeIcon from "@images/images/menu/home.png";
import speakerIcon from "@images/images/menu/speaker.png";
import { IPaths } from "@interfaces/i-paths-interface";

export const paths: IPaths[] = [
	{
		pathName: "Home",
		path: "/",
		icon: homeIcon,
	},
	{
		pathName: "Headphones",
		path: "/category/headphones",
		icon: headphonesIcon,
	},
	{
		pathName: "Speakers",
		path: "/category/speakers",
		icon: speakerIcon,
	},
	{
		pathName: "Earphones",
		path: "/category/earphones",
		icon: earphonesIcon,
	},
];
