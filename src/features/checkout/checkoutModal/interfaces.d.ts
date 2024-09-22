import { ICart } from "@/models/interfaces";
import { IPrices } from "../interfaces";

interface ICheckoutModal {
  staticData: ICart[];
  isOpenModal: boolean;
  prices: () => IPrices;
}
