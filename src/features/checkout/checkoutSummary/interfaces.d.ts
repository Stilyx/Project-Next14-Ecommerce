import { IPrices } from "../interfaces";

export interface ICheckout {
  isValid: boolean;
  isLoading: boolean;
  data: ICart[];
  handleClickContinue: () => void;
  prices: () => IPrices;
}
