import { IProduct } from "@/models/interfaces";
import { instance } from "@/utils/axios-config/axios-config";
import { AxiosResponse } from "axios";

export const getProduct = async (slug: string) => {
  const response: AxiosResponse<IProduct[]> = await instance.get(
    `products?slug=${slug}`,
  );
  return response.data;
};
