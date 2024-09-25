"use client";

import { CartButton } from "@/components/cartButton";
import { SectionCard } from "@/components/sectionCard";
import CartModal from "@/features/cartModal";
import { useCart } from "@/hooks/cart-context";
import { Menu } from "@/layouts/menu";
import { ICart } from "@/models/interfaces";
import HeaderNavigations from "@components/headerNavigations";
import logo from "@images/logo.svg";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { cartList, setCartList } = useCart();

  const readProduct = async (cartListItems: ICart[]) => {
    const updatedCartList = cartListItems.map((item) => {
      if (item.new) {
        return { ...item, new: false };
      }
      return item;
    });

    setCartList(updatedCartList);
    Cookies.set("cart", JSON.stringify(updatedCartList));
  };

  const handleOpenModal = async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isWrapper = target.classList.contains("wrapper");
    const isCart = e.currentTarget.classList.contains("cart");
    const newState = !isModalOpen;
    if (!isWrapper && !isCart) return;

    setIsModalOpen((prev) => !prev);

    readProduct(cartList);
    return newState
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  };

  return (
    <>
      <SectionCard className="w-full bg-secondary-300 px-[3.5rem] pt-[2rem]">
        <section className="flex w-full flex-row items-center justify-between border-b border-tertiary-100/[20%] pb-[2.25rem]">
          <Menu />
          <Image
            src={logo}
            width={143}
            height={25}
            style={{ width: "auto", height: "auto" }}
            alt="logo"
            priority
          />
          <HeaderNavigations />
          <CartButton handleOpenModal={handleOpenModal} />
        </section>
      </SectionCard>
      <CartModal
        isModalOpen={isModalOpen}
        handleOpenModal={(e) => handleOpenModal(e)}
      />
    </>
  );
};
