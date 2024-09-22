"use client";

import Button from "@/components/button";
import { ICart } from "@/models/interfaces";
import { formatDollar } from "@/utils/formatters";
import Image from "next/image";
import { ICheckout } from "./interfaces";

export const CheckoutSummary = ({
  isValid,
  data,
  handleClickContinue,
  prices,
}: ICheckout) => {
  const { vat, total, grandTotal, shipping } = prices();

  return (
    <section className="flex h-[38.25rem] w-[21.875rem] flex-col rounded bg-tertiary-100 p-[2rem] tablet:w-full">
      <h6 className="prose-headline-h6 mb-[2rem]">SUMMARY</h6>

      <section className="relative mb-[2rem] flex h-[15.25rem] max-h-[15.25rem] flex-col gap-[2rem] overflow-y-auto tablet:max-h-[15rem]">
        {data
          ?.map((product: ICart, index: number) => (
            <div
              key={index}
              className={`mr-[1.25rem] flex flex-row items-center justify-between gap-[3.125rem] px-[0.5rem] mobile:gap-[1rem]`}
            >
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
                    objectFit: "contain",
                  }}
                />
                <div className="flex flex-col">
                  <p className="prose-body">{product.shortName}</p>
                  <p className="opacity-50">{formatDollar(product.price)}</p>
                </div>
              </div>

              <p className="prose-body opacity-50">x{product.quantity}</p>
            </div>
          ))
          .reverse()}
      </section>

      <section className="flex flex-col gap-[0.5rem] pb-[2rem]">
        <div className="flex w-full flex-row items-center justify-between">
          <p className="prose-body opacity-50">Total</p>
          <p className="prose-headline-h6">{formatDollar(total)}</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <p className="prose-body opacity-50">SHIPPING</p>
          <p className="prose-headline-h6">{formatDollar(shipping)}</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <p className="prose-body opacity-50">VAT (INCLUDES)</p>
          <p className="prose-headline-h6">{formatDollar(vat)}</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between pt-[1rem]">
          <p className="prose-body opacity-50">GRAND TOTAL</p>
          <p className="prose-headline-h6 text-primary-200">
            {formatDollar(grandTotal)}
          </p>
        </div>
      </section>

      <Button
        disabled={!isValid}
        variant="default"
        onClick={() => handleClickContinue()}
      >
        CONTINUE & PAY
      </Button>
    </section>
  );
};
