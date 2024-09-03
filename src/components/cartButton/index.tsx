import cart from "@images/images/cart/cart.svg";
import Image from "next/image";
import { iCartContainer } from "./interfaces";

export const CartButton = (props: iCartContainer) => {
	const cartNoReadNumber = props.data.filter(
		(item) => item.new === true
	).length;

	return (
		<>
			<div
				onClick={(e) => props.handleOpenModal(e)}
				className="cart z-60  relative cursor-pointer w-[1.25rem]  flex items-center"
			>
				<Image
					alt="cart button"
					src={cart}
					width={20}
					height={20}
					style={{
						width: "auto",
						height: "auto",
					}}
				/>
				{cartNoReadNumber && (
					<div className="absolute top-[-0.625rem] right-[-0.625rem] flex items-center justify-center  w-[1rem] h-[1rem] rounded-full bg-primary-200">
						<span className="text-[0.75rem] text-tertiary-100">
							{cartNoReadNumber === 0 ? "" : cartNoReadNumber}
						</span>
					</div>
				)}
			</div>
		</>
	);
};
