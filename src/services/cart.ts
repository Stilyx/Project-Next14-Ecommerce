import { instance } from "@/utils/axios-config/axios-config";
import { ICart } from "@models/interfaces";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const getCart = async () => {
  const response: AxiosResponse<ICart[]> = await instance.get("/cart");
  return response.data;
};

export const addItemToCart = async (data: ICart) => {
  await instance
    .post("/cart", data)
    .then((response) => {
      toast.success(`${data.shortName} foi adicionado ao carrinho`);
      return response.data;
    })
    .catch((err) =>
      toast.error(`Não foi posível adicionar o produto. Erro: ${err}`),
    );
};

export const changeProductQuantity = async (
  id: string,
  quantity: { quantity: number },
) => {
  instance
    .patch(`/cart/${id}`, quantity)
    .then(() => toast.success("Atualizado com sucesso"))
    .catch((err) =>
      toast.error(`Não foi posível atualizar quantidade. Erro: ${err}`),
    );
};

export const readProduct = async (cartList: ICart[]) => {
  try {
    cartList.forEach((item) => {
      if (item.new) {
        instance.patch(`/cart/${item.id}`, { new: false });
      }
      return;
    });
  } catch (err) {}
};

export const deleteAllCart = async (cartList: ICart[]) => {
  try {
    cartList.forEach((item) => {
      instance.delete(`/cart/${item.id}`);
    });
    toast.success("Produtos deletados!");
  } catch (err) {
    toast.error(`Não foi posível deletar produtos. Erro: ${err}`);
  }
};

export const deleteProductId = async (id: string) => {
  try {
    instance.delete(`/cart/${id}`);
    toast.success("Produto deletado!");
  } catch (err) {
    toast.error(`Não foi posível deletar produto. Erro: ${err}`);
  }
};
