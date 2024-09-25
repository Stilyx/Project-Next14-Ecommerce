import { useCart } from "@/hooks/cart-context";
import { sumPrices } from "@/utils/sum-prices";
import Button from "@components/button";
import emptyCart from "@images/images/cart/empty-cart.png";
import { ICart } from "@models/interfaces";
import { formatDollar } from "@utils/formatters";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ICardModal } from "./interface";

export default function CartModal(props: ICardModal) {
  const { cartList, setCartList } = useCart();
  const pricesArray = cartList.map((item: ICart) => item.price * item.quantity);
  const addedPrices = sumPrices(pricesArray);
  const router = useRouter();

  const handleChangeQuantity = (
    id: number,
    quantity: number,
    operation: string,
  ) => {
    let newQuantity = quantity;

    if (operation === "sum") newQuantity = quantity + 1;
    if (operation === "sub") newQuantity = quantity - 1;

    if (newQuantity <= 0) return deleteProductId(id);

    const newCart = cartList.map((product: ICart) =>
      product.id === id ? { ...product, quantity: newQuantity } : product,
    );

    setCartList(newCart);
    Cookies.set("cart", JSON.stringify(newCart));
  };

  const handleRemoveAll = () => {
    setCartList([]);
    Cookies.set("cart", JSON.stringify([]));
    toast.success("The cart has been cleaned!!");
  };

  const deleteProductId = (id: number) => {
    const newCart = cartList.filter((product: ICart) => id !== product.id);

    setCartList(newCart);
    Cookies.set("cart", JSON.stringify(newCart));
    toast.success("Product deleted!");
  };

  const handleNavigateToCheckout = () => {
    router.push("/checkout");
    document.body.style.overflow = "visible";
  };

  return (
    <section
      onClick={(e) => props.handleOpenModal(e)}
      className={`${!props.isModalOpen && "hidden"} wrapper absolute z-[100] h-full w-full bg-secondary-100/[0.7]`}
    >
      <div className="absolute right-6 top-[6rem] min-h-[25rem] w-fit min-w-[20.438rem] rounded bg-tertiary-100 px-[2.063rem] py-[1.938rem] tablet:max-h-[80%] mobile:left-0 mobile:right-0 mobile:mx-auto mobile:h-auto mobile:max-h-[80%]">
        {!cartList.length && (
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h6 className="prose-headline-h6 opacity-50">Your cart is empty</h6>
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
        {cartList!.length > 0 && (
          <>
            <section className="flex flex-row justify-between pb-[2rem]">
              <p className="prose-headline-h6">
                CART ({cartList?.length ? cartList.length : 0})
              </p>
              <button
                onClick={() => handleRemoveAll()}
                className="prose-sub-title underline opacity-50"
              >
                Remove all
              </button>
            </section>

            <section className="relative mb-[5rem] flex h-[11.25rem] max-h-[11.25rem] flex-col gap-[0.8rem] overflow-y-auto tablet:h-full tablet:max-h-[15rem] mobile:max-h-[20rem]">
              {cartList
                ?.map((product: ICart, index: number) => (
                  <div
                    key={index}
                    className={`mr-[1.25rem] flex flex-row items-center justify-between gap-[3.125rem] px-2 mobile:gap-[1rem]`}
                  >
                    <div
                      className={`${
                        !product.new && "hidden"
                      } absolute right-[0.5rem] z-[100] h-[0.5rem] w-[0.5rem] animate-pulse rounded-full bg-primary-100`}
                    ></div>
                    <div className="flex flex-row gap-[1rem]">
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
                    <div className="prose-sub-title flex flex-row items-center gap-[1rem] bg-tertiary-300 px-[1rem] py-[0.25rem] [&>button]:opacity-50">
                      <button
                        onClick={() =>
                          handleChangeQuantity(
                            product.id,
                            product.quantity,
                            "sub",
                          )
                        }
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() =>
                          handleChangeQuantity(
                            product.id,
                            product.quantity,
                            "sum",
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
                .reverse()}
            </section>
            <div className="flex h-fit w-full flex-col gap-[1.5rem]">
              <section className="flex flex-row items-center justify-between">
                <p className="opacity-50">TOTAL</p>
                <p className="prose-headline-h6">{formatDollar(addedPrices)}</p>
              </section>
              <Button
                onClick={handleNavigateToCheckout}
                className="w-full"
                variant="default"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
