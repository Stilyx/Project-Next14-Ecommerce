"use client";

import { ICart } from "@/models/interfaces";
import { CartContextType } from "@/models/interfaces/i-cart-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const Context = createContext<CartContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<ICart[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(Cookies.get("cart") || "[]");
    setCartList(storedCart);
  }, []);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ cartList, setCartList }}>
        {children}
      </Context.Provider>
    </QueryClientProvider>
  );
};
