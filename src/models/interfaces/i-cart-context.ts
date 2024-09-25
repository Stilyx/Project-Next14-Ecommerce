import { ICart } from "./i-cart-item-interface";

export interface CartContextType {
  cartList: ICart[];
  setCartList: React.Dispatch<React.SetStateAction<ICart[]>>;
}
