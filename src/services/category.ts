import { IProduct } from "@/models/interfaces";
import { instance } from "@/utils/axios-config/axios-config";
import { AxiosResponse } from "axios";

export const getCategory = async (category: string) => {
	const response: AxiosResponse<IProduct[]> = await instance.get(
		`/products?category=${category}`
	);
	return response.data;
};
