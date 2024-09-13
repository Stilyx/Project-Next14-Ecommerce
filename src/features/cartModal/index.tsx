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
import { useRouter } from "next/navigation";

export default function CartModal(props: ICardModal) {
  const pricesArray = props.data?.map((item) => item.price * item.quantity);
  const addedPrices = sumPrices(pricesArray);
  const router = useRouter();

  const handleLessOrDelete = (id: string, quantity: number) => {
    const newQuantity = quantity - 1;

    if (newQuantity <= 0) return deleteProductId(id);

    changeProductQuantity(id, { quantity: newQuantity });
  };

  return (
    <section
      onClick={(e) => props.handleOpenModal(e)}
      className={`${
        !props.isModalOpen && "hidden"
      } wrapper absolute z-[100] h-full w-full bg-secondary-100/[0.7]`}
    >
      <div className="absolute right-6 top-[0.5rem] min-h-[25rem] w-fit min-w-[20.438rem] rounded bg-tertiary-100 px-[2.063rem] py-[1.938rem] tablet:h-[70%] mobile:left-0 mobile:right-0 mobile:mx-auto">
        {props.isLoading && !props.isFetched && <Loading />}
        {!props.data?.length && props.isFetched && (
          <div className="flex flex-col items-center justify-center gap-6 text-center">
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
            <section className="flex flex-row justify-between pb-[2rem]">
              <p className="prose-headline-h6">
                CART ({props.data?.length ? props.data.length : 0})
              </p>
              <button
                onClick={() => deleteAllCart(props.data!)}
                className="prose-sub-title underline opacity-50"
              >
                Remove all
              </button>
            </section>
            <section className="relative mb-[2rem] flex h-[11.25rem] max-h-[11.25rem] flex-col gap-[0.8rem] overflow-y-auto tablet:max-h-[15rem]">
              {props.data
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
                          handleLessOrDelete(
                            product?.id || "",
                            product.quantity,
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
            </section>
            <section className="mb-[1.5rem] flex flex-row items-center justify-between">
              <p className="opacity-50">TOTAL</p>
              <p className="prose-headline-h6">{formatDollar(addedPrices)}</p>
            </section>
            <Button
              onClick={() => router.push("/checkout")}
              className="w-full"
              variant="default"
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
