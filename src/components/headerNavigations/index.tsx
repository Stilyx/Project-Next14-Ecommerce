import { paths } from "@models/constants/i-nav-path-constants";
import Link from "next/link";

export default function HeaderNavigations() {
	return (
		<nav className="flex tablet:hidden prose-sub-title flex-row gap-[2.125rem] [&>*]:text-tertiary-100">
			{paths.map((link, index: number) => (
				<Link className="hover:text-primary-200" key={index} href={link.path}>
					{link.pathName.toUpperCase()}
				</Link>
			))}
		</nav>
	);
}
