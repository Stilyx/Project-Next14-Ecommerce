"use client";

import { BackButton } from "@/components/backButton";
import { ICart } from "@/models/interfaces";
import {
  CheckoutFormSchema,
  checkoutSchema,
} from "@/models/schemas/checkout-form";
import { deleteAllCart, getCart } from "@/services";
import { sumPrices } from "@/utils/sum-prices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckoutForm } from "./checkoutForm";
import { CheckoutModal } from "./checkoutModal";
import { CheckoutSummary } from "./checkoutSummary";

export const CheckoutFeature = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [completedList, setCompletedList] = useState<ICart[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ["get-cart"],
    queryFn: getCart,
  });

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutSchema),
    mode: "all",
  });

  const staticData = data?.map((product) => product);
  const radioOption = watch("moneyType");

  const getPrices = () => {
    const totalArray = data?.map((item) => item.price * item.quantity);
    const total = sumPrices(totalArray || []);
    const vat = total * 0.1;
    const shipping = 50;
    const grandTotal = vat + shipping + total;

    return { total, vat, grandTotal, shipping };
  };

  const handleClickContinue = async () => {
    setIsOpenModal(true);
    await deleteAllCart(data!);
    setCompletedList(data!);
  };

  return (
    <>
      <CheckoutModal
        staticData={completedList || []}
        isOpenModal={isOpenModal}
        prices={() => getPrices()}
      />
      <section className="mx-[5rem]">
        <BackButton />
      </section>
      <section className="flex h-full w-full flex-row justify-center gap-[1.875rem] px-[2rem] pb-[8.813rem] tablet:flex-col tablet:items-center">
        <section className="h-auto w-[45.625rem] rounded bg-tertiary-100 px-[3rem] py-[3.375rem] tablet:w-full">
          <h3 className="prose-headline-h3">CHECKOUT</h3>
          <CheckoutForm
            radioOption={radioOption}
            register={register}
            errors={errors}
          />
        </section>
        <CheckoutSummary
          isValid={isValid}
          data={staticData || completedList}
          isLoading={isLoading}
          handleClickContinue={() => handleClickContinue()}
          prices={() => getPrices()}
        />
      </section>
    </>
  );
};
