import { useCart } from "@/hooks/cart-context";
import { ICart } from "@/models/interfaces";
import cart from "@images/images/cart/cart.svg";
import Image from "next/image";
import { iCartProps } from "./interfaces";

export const CartButton = (props: iCartProps) => {
  const { cartList } = useCart();

  const cartNoReadNumber = cartList?.filter(
    (item: ICart) => item.new === true,
  ).length;

  return (
    <button
      onClick={(e) => props.handleOpenModal(e)}
      className="cart relative z-[200] flex w-[1.25rem] items-center"
    >
      <div className="h-[1.25rem] w-[1.25rem]">
        <Image
          alt="cart button"
          src={cart}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      {cartNoReadNumber > 0 && (
        <div className="absolute right-[-0.625rem] top-[-0.625rem] flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-primary-200">
          <span className="text-[0.75rem] text-tertiary-100">
            {cartNoReadNumber}
          </span>
        </div>
      )}
    </button>
  );
};
