import Button from "@/components/button";
import { formatDollar } from "@/utils/formatters";
import checkIcon from "@images/images/shared/desktop/icon-check-mark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ICheckoutModal } from "./interfaces";

export const CheckoutModal = ({
  staticData,
  isOpenModal,
  prices,
}: ICheckoutModal) => {
  const [visibleCartList, setVisibleCartList] = useState(1);
  const router = useRouter();

  const { grandTotal } = prices();

  return (
    <>
      {staticData && (
        <section
          className={`${isOpenModal ? "visible" : "hidden"} wrapper absolute z-[80] h-full w-full bg-secondary-100/[0.7]`}
        >
          <div className="fixed left-0 right-0 top-[2rem] mx-auto flex h-fit w-fit min-w-[20.438rem] flex-col rounded bg-tertiary-100 px-[2.063rem] py-[1.938rem]">
            <Image
              className="mb-[2rem]"
              src={checkIcon}
              alt="Check Icon"
              width={64}
              height={64}
            />
            <h3 className="prose-headline-h6 mb-[1.5rem] w-[17.75rem]">
              THANK YOU FOR YOUR ORDER
            </h3>
            <p className="prose-body opacity-50">
              You will receive an email confirmation shortly.
            </p>

            <div className="flex flex-row py-[2rem] pb-[2.875rem] mobile:flex-col">
              <div className="flex flex-col items-center justify-center rounded-s-md bg-tertiary-300 px-[1rem] py-[2rem] mobile:rounded-s-none mobile:rounded-t-md">
                <ul className="flex max-h-[11.25rem] flex-col gap-[1rem] overflow-y-auto pr-[1.875rem] mobile:w-full">
                  {staticData.slice(0, visibleCartList).map((produt) => (
                    <div
                      key={produt.id}
                      className={`flex flex-row items-center justify-between gap-[3.125rem] mobile:gap-[1rem]`}
                    >
                      <div className="flex flex-row gap-[1rem]">
                        <Image
                          width={44}
                          height={44}
                          src={produt.cartImage}
                          alt="product image"
                          style={{
                            borderRadius: "0.625rem",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                          }}
                        />
                        <div className="flex flex-col">
                          <p className="prose-body">{produt.shortName}</p>
                          <p className="opacity-50">
                            {formatDollar(produt.price)}
                          </p>
                        </div>
                      </div>
                      <p className="prose-body opacity-50">
                        x{produt.quantity}
                      </p>
                    </div>
                  ))}
                </ul>
                {staticData.length > 1 && (
                  <div
                    className="mt-[0.75rem] w-full cursor-pointer border-t border-secondary-100 border-opacity-[8%] pt-[0.75rem] text-center hover:text-primary-200"
                    onClick={() =>
                      setVisibleCartList(
                        visibleCartList === 1 ? staticData.length : 1,
                      )
                    }
                  >
                    <p className="prose-body opacity-50">
                      {visibleCartList === staticData.length
                        ? "View Less"
                        : `and ${staticData.length - 1} other item(s)`}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col rounded-r-md bg-secondary-200 px-[2rem] py-[2.625rem] text-tertiary-100 mobile:rounded-b-md mobile:rounded-t-none">
                <p className="prose-body opacity-50">GRAND TOTAL</p>
                <p className="prose-headline-h6">{formatDollar(grandTotal)}</p>
              </div>
            </div>

            <Button onClick={() => router.push("/")} variant="default">
              BACK TO HOME
            </Button>
          </div>
        </section>
      )}
    </>
  );
};
