import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(3, "Invalid Name").max(40, "Name Limit 40 Characters"),
    email: z.string().email("Invalid Email"),
    phone: z
      .string()
      .regex(/^\(?\d{2,3}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/, "Invalid Phone"),
    adress: z
      .string()
      .min(3, "Invalid Adress")
      .max(20, "Adress Limit 20 Characters"),
    zipCode: z.string().regex(/^\d{5}-\d{3}$/, "Invalid Zip Code"),
    city: z.string().min(3, "Invalid City").max(50, "City Limit 50 Characters"),
    country: z
      .string()
      .min(3, "Invalid Country")
      .max(20, "Country Limit 20 Characters"),

    moneyType: z.enum(["emoney", "delivery-cash"], {
      message: "Select an Option",
    }),
    moneyNumber: z.string().optional(),
    moneyPin: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.moneyType === "emoney") {
      if (/^\d{10}$/.test(data.moneyNumber || "") === false) {
        return ctx.addIssue({
          path: ["moneyNumber"],
          message: "Invalid E-Money Number",
          code: "custom",
        });
      }

      if (/^\d{4}$/.test(data.moneyPin || "") === false) {
        return ctx.addIssue({
          path: ["moneyPin"],
          message: "Invalid E-Money Pin",
          code: "custom",
        });
      }
    }

    return true;
  });

export type CheckoutFormSchema = z.infer<typeof checkoutSchema>;
