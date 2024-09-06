import { About } from "@/layouts/about";
import { AppProvider } from "@/providers";
import { Header } from "@layouts/header";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Audiophile Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AppProvider>
          <ToastContainer position="top-left" autoClose={3000} theme="dark" />
          <Header />
          {children}
          <About />
        </AppProvider>
      </body>
    </html>
  );
}
