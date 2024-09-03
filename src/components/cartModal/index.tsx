import {
	changeProductQuantity,
	deleteAllCart,
	deleteProductId,
} from "@/services";
import Button from "@components/button";
import emptyCart from "@images/images/cart/empty-cart.png";
import { ICart } from "@models/interfaces";
import { formatDollar } from "@utils/formatters";
import { sumPrices } from "@utils/sum-prices";
import Image from "next/image";
import { ICardModal } from "./interface";
import { Loading } from "./loading";

export default function CartModal(props: ICardModal) {
	const pricesArray = props.data?.map((item) => item.price * item.quantity);
	const addedPrices = sumPrices(pricesArray);

	const handleLessOrDelete = (id: string, quantity: number) => {
		const newQuantity = quantity - 1;

		if (newQuantity <= 0) return deleteProductId(id);

		changeProductQuantity(id, { quantity: newQuantity });
	};

	return (
		<div
			onClick={(e) => props.handleOpenModal(e)}
			className={`${
				!props.isModalOpen && "hidden"
			} w-full h-full bg-secondary-100/[0.7] absolute wrapper`}
		>
			<div className="bg-tertiary-100   min-h-[25rem] absolute mobile:mx-auto  top-[0.5rem] mobile:left-0 mobile:right-0   px-[2.063rem] w-fit min-w-[20.438rem] right-6  py-[1.938rem] rounded tablet:h-[70%]">
				{props.isLoading && !props.isFetched && <Loading />}
				{!props.data?.length && props.isFetched && (
					<div className="flex flex-col gap-6 items-center justify-center text-center">
						<h6 className="prose-headline-h6 opacity-50">
							Seu carrinho está vázio
						</h6>
						<Image
							alt="empty cart"
							src={emptyCart}
							width={200}
							height={200}
							style={{
								width: "auto",
								height: "auto",
							}}
						/>
					</div>
				)}
				{props.data!.length > 0 && props.isFetched && (
					<>
						<div className="flex flex-row justify-between pb-[2rem]">
							<p className="prose-headline-h6">
								CART ({props.data?.length ? props.data.length : 0})
							</p>
							<button
								onClick={() => deleteAllCart(props.data!)}
								className="prose-sub-title underline opacity-50 "
							>
								Remove all
							</button>
						</div>
						<div className="flex relative flex-col gap-[0.8rem] mb-[2rem] max-h-[11.25rem] overflow-y-auto h-[11.25rem] tablet:max-h-[15rem]">
							{props.data
								?.map((product: ICart, index: number) => (
									<div
										key={index}
										className={`flex gap-[3.125rem] mobile:gap-[1rem]  items-center flex-row justify-between px-2 mr-[1.25rem]`}
									>
										<div
											className={`${
												!product.new && "hidden"
											} absolute z-[100] animate-pulse right-[0.5rem]   w-[0.5rem] h-[0.5rem] rounded-full bg-primary-100`}
										></div>
										<div className="flex flex-row gap-[1rem] ">
											<Image
												width={44}
												height={44}
												src={product?.cartImage}
												alt="product image"
												style={{
													borderRadius: "0.625rem",
													width: "auto",
													height: "auto",
												}}
											/>
											<div className="flex flex-col">
												<p className="prose-body">{product.shortName}</p>
												<p className="opacity-50">{product.price}</p>
											</div>
										</div>

										<div className="flex prose-sub-title flex-row py-[0.25rem] items-center bg-tertiary-300  gap-[1rem] px-[1rem] [&>button]:opacity-50">
											<button
												onClick={() =>
													handleLessOrDelete(
														product?.id || "",
														product.quantity
													)
												}
											>
												-
											</button>
											<p>{product.quantity}</p>
											<button
												onClick={() =>
													changeProductQuantity(product?.id || "", {
														quantity: product.quantity + 1,
													})
												}
											>
												+
											</button>
										</div>
									</div>
								))
								.reverse()}
						</div>
						<div className="flex flex-row mb-[1.5rem] justify-between items-center">
							<p className="opacity-50">TOTAL</p>
							<p className="prose-headline-h6">{formatDollar(addedPrices)}</p>
						</div>
						<Button variant="default">Checkout</Button>
					</>
				)}
			</div>
		</div>
	);
}
