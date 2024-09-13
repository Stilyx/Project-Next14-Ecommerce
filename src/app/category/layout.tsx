import { About } from "@/layouts/about";
import { Footer } from "@/layouts/footer";
import { Header } from "@layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Categories and Products",
};

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <About />
      <Footer />
    </>
  );
}
