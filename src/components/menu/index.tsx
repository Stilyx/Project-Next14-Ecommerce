import { paths } from "@models/constants/i-nav-path-constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const menuBurguer =
		" h-1 w-6 bg-tertiary-300 rounded transition-all duration-300 ease-out";

	const handleOpenMenu = () => setIsMenuActive(!isMenuActive);

	return (
		<div className="hidden tablet:flex h-auto">
			<div
				onClick={handleOpenMenu}
				className="z-30 flex gap-[0.25rem] absolute top-[2.313rem] flex-col justify-center items-center"
			>
				<span
					className={`${
						isMenuActive
							? "rotate-45 translate-y-[0.5rem] my-[0.25rem] mx-auto"
							: "-translate-y-0.5"
					}  ${menuBurguer}`}
				></span>
				<span className={`${menuBurguer} ${isMenuActive && "hidden"}`}></span>
				<span
					className={`${
						isMenuActive
							? "-rotate-45 translate-y-[-0.5rem]  my-[0.25rem] mx-auto  "
							: "translate-y-0.5"
					} ${menuBurguer}`}
				></span>
			</div>

			<div
				className={`${
					isMenuActive
						? "w-[80%] bg-white h-screen left-0 top-0 ease-in  opacity-1 "
						: " w-[2rem] h-screen  opacity-0 ease-out"
				} bg-secondary-100  z-10  flex  absolute  items-center transition-all duration-100 `}
			>
				<div className="grid mobile:grid-cols-2 grid-cols-3 h-auto gap-[2rem]  px-[2.063rem] py-[1.938rem]">
					{paths.map((item, index) => (
						<Link
							href={item.path}
							onClick={handleOpenMenu}
							key={index}
							className="flex flex-col items-center"
						>
							<div className="w-[5rem] flex items-center justify-center h-[5rem] rounded bg-primary-200">
								<Image
									src={item.icon}
									width={40}
									height={40}
									alt="navigation icon"
									style={{
										width: "auto",
										height: "auto",
									}}
								/>
							</div>
							<p className="prose-sub-title text-tertiary-300">
								{item.pathName}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
