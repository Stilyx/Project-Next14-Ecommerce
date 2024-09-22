import { CheckoutFormSchema } from "@/models/schemas/checkout-form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ICheckoutForm {
  register: UseFormRegister<CheckoutFormSchema>;
  errors: FieldErrors<CheckoutFormSchema>;
  radioOption: "emoney" | "delivery-cash";
}
