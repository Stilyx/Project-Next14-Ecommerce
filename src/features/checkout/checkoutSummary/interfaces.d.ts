import { IPrices } from "../interfaces";

export interface ICheckout {
  isValid: boolean;
  data: ICart[];
  handleClickContinue: () => void;
  prices: () => IPrices;
}
