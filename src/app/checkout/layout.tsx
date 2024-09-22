import { Footer } from "@/layouts/footer";
import { Header } from "@layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Categories and Products",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="relative h-full w-full flex-grow bg-tertiary-300">
        {children}
      </main>
      <Footer />
    </>
  );
}
