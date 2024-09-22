import InputField from "@/components/input";
import InputRadio from "@/components/inputRadio";
import cashOnDeliveryIcon from "@images/images/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";
import { ICheckoutForm } from "./interfaces";

export const CheckoutForm = ({
  register,
  errors,
  radioOption,
}: ICheckoutForm) => {
  return (
    <form>
      <section className="flex flex-col gap-[0.563rem] pt-[3.313rem]">
        <p className="prose-sub-title mb-[1rem] text-primary-200">
          BILLING DETAILS
        </p>
        <div className="grid grid-cols-2 gap-[2rem] mobile:flex mobile:w-full mobile:flex-col mobile:justify-center">
          <InputField
            inputId="name"
            inputText="Name"
            placeholder="Your name"
            inputType="text"
            errorText={errors.name?.message}
            {...register("name")}
          />
          <InputField
            inputId="email"
            inputText="Email"
            placeholder="you@email.com"
            inputType="email"
            errorText={errors.email?.message}
            {...register("email")}
          />
          <InputField
            inputId="phone"
            inputText="Phone"
            placeholder="(99) 99999-9999"
            inputType="text"
            errorText={errors.phone?.message}
            {...register("phone")}
          />
        </div>
      </section>
      <section className="flex flex-col gap-[0.563rem] pt-[3.313rem]">
        <p className="prose-sub-title mb-[1rem] text-primary-200">
          SHIPPING INFO
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-[2rem] mobile:flex mobile:w-full mobile:flex-col mobile:justify-center">
          <InputField
            inputId="adress"
            inputText="Adress"
            inputType="text"
            placeholder="Avenida Barão do Rio Branco"
            errorText={errors.adress?.message}
            {...register("adress")}
            className="col-span-2"
          />
          <InputField
            inputId="zipCode"
            inputText="Zip Code"
            placeholder="99999-999"
            inputType="text"
            errorText={errors.zipCode?.message}
            {...register("zipCode")}
          />
          <InputField
            inputId="city"
            inputText="City"
            inputType="text"
            errorText={errors.city?.message}
            placeholder="Rio De Janeiro"
            {...register("city")}
          />
          <InputField
            inputId="country"
            inputText="Country"
            inputType="text"
            placeholder="Brasil"
            errorText={errors.country?.message}
            {...register("country")}
          />
        </div>
      </section>
      <section className="flex flex-col gap-[0.563rem] pb-[1.5rem] pt-[3.313rem]">
        <p className="prose-sub-title mb-[1rem] text-primary-200">
          PAYMENT DETAILS
        </p>
        <section className="flex flex-row items-start justify-between mobile:flex-col mobile:justify-center">
          <p className="text-[0.75rem] font-bold">Payment Method</p>
          <div className="flex w-[19.313rem] flex-col gap-[1rem] mobile:w-full">
            <p className="pb-[0.563rem] text-[0.75rem] text-status-red">
              {errors.moneyType?.message}
            </p>
            <InputRadio
              inputValue="emoney"
              optionName="E-Money"
              radioId="emoney"
              {...register("moneyType")}
            />
            <InputRadio
              inputValue="delivery-cash"
              optionName="Cash on Delivery"
              radioId="delivery-cash"
              {...register("moneyType")}
            />
          </div>
        </section>
      </section>
      {radioOption === "emoney" && (
        <section className="grid grid-cols-2 gap-[1rem] mobile:flex mobile:flex-col mobile:justify-center">
          <InputField
            inputId="emoneyNumber"
            inputText="E-Money Number"
            inputType="text"
            placeholder="238521993"
            errorText={errors.moneyNumber?.message}
            {...register("moneyNumber")}
          />
          <InputField
            inputId="moneyPin"
            inputText="E-Money Pin"
            inputType="text"
            placeholder="6891"
            errorText={errors.moneyPin?.message}
            {...register("moneyPin")}
          />
        </section>
      )}
      {radioOption === "delivery-cash" && (
        <section className="flex flex-row items-center gap-[2rem]">
          <Image
            alt="Cash On Delivery Icon"
            src={cashOnDeliveryIcon}
            width={48}
            height={48}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <p className="prose-body opacity-50">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </section>
      )}
    </form>
  );
};
