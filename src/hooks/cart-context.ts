import { Context } from "@/providers";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useCart must be used within an AppProvider");
  }
  return context;
};
