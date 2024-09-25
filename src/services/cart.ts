import { instance } from "@/utils/axios-config/axios-config";
import { ICart } from "@models/interfaces";
import { AxiosResponse } from "axios";

export const getCart = async () => {
  const response: AxiosResponse<ICart[]> = await instance.get("/cart");
  return response.data;
};
