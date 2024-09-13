"use client";

import { z } from "zod";

const mySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  adress: z.string(),
  zipCode: z.number(),
  city: z.string(),
  country: z.string(),
});

import { BackButton } from "@/components/backButton";
import Input from "@/components/input";

export default function CheckoutPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <section className="mx-[165px]">
        <BackButton />
      </section>
      <section className="mx-[165px] mb-[141px] h-[600px] rounded bg-tertiary-100 px-[48px] py-[54px]">
        <h3 className="prose-headline-h3">CHECKOUT</h3>

        <div className="flex flex-col gap-[9px] pt-[100px]">
          <Input
            inputId="email"
            inputText="Email"
            placeholderText="Insira seu Email"
            inputType="email"
            error={false}
            errorText="Wrong Email"
          />
        </div>
      </section>
    </div>
  );
}
