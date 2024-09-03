"use client";

import { CartButton } from "@/components/cartButton";
import { getCart, readProduct } from "@/services";
import CartModal from "@components/cartModal";
import HeaderNavigations from "@components/headerNavigations";
import { Menu } from "@components/menu";
import logo from "@images/logo.svg";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export function Header() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { data, isLoading, isFetched } = useQuery({
		queryKey: ["get-cart"],
		queryFn: getCart,
		refetchInterval: 1000,
	});

	const dataList = data || [];

	const handleOpenModal = async (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const isWrapper = target.classList.contains("wrapper");
		const isCart = e.currentTarget.classList.contains("cart");
		const newState = !isModalOpen;
		if (!isWrapper && !isCart) return;

		setIsModalOpen((prev) => !prev);

		setTimeout(() => readProduct(dataList), 3000);

		return newState
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	};

	return (
		<>
			<div className="tablet:px-[2.25rem] px-[3.5rem] pt-[2rem]  w-full bg-secondary-100">
				<div className="border-tertiary-100/[20%] border-b w-full items-center flex flex-row pb-[2.25rem] justify-between">
					<Menu />
					<Image
						src={logo}
						width={143}
						height={25}
						style={{ width: "auto", height: "auto" }}
						alt="logo"
						priority
					/>
					<HeaderNavigations />
					<CartButton data={dataList} handleOpenModal={handleOpenModal} />
				</div>
			</div>
			<CartModal
				isLoading={isLoading}
				isFetched={isFetched}
				isModalOpen={isModalOpen}
				handleOpenModal={(e) => handleOpenModal(e)}
				data={dataList}
			/>
		</>
	);
}
