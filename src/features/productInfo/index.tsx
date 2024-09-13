"use client";

import Button from "@/components/button";
import { SectionCard } from "@/components/sectionCard";
import { debounce } from "@/hooks/debounce";
import { getSize } from "@/hooks/get-size";
import { ICart } from "@/models/interfaces";
import { addItemToCart, getProduct } from "@/services";
import { formatDollar } from "@/utils/formatters";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductInfoLoading } from "./loading";

export const ProductInfo = (navigation: { params: string }) => {
  const [size, setSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["product-item"],
    queryFn: () => getProduct(navigation.params),
  });

  const mutation = useMutation({
    mutationFn: addItemToCart,
  });

  const productData = data?.[0] || undefined;

  const handleAddProduct = () => {
    const data: ICart = {
      cartImage: productData!.cartImage,
      shortName: productData!.shortName,
      new: true,
      price: productData!.price,
      quantity: quantity,
    };
    mutation.mutate(data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setSize(getSize(window.innerWidth));
      const debouncedResize = debounce(handleResize, 100);

      handleResize();

      window.addEventListener("resize", debouncedResize);
      return () => window.removeEventListener("resize", debouncedResize);
    }
  }, []);

  return (
    <>
      {isFetching && isLoading ? (
        <ProductInfoLoading />
      ) : (
        <>
          <SectionCard className="mb-[10rem] flex items-center justify-center gap-[9.813rem] tablet:gap-[1.563rem] mobile:flex-col">
            <div
              className={`flex h-[35rem] tablet:h-auto tablet:w-full mobile:h-auto mobile:justify-center`}
            >
              <Image
                src={productData!.image[size]}
                alt="Shop Icon"
                width={300}
                height={300}
                className="rounded-[0.375rem]"
                style={{
                  objectFit: "contain",
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
            </div>
            <div className="flex w-[27.813rem] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center mobile:items-start mobile:text-start">
              <p className="prose-overline mb-[1rem] text-primary-200">
                {productData!.new ? "NEW PRODUCT" : ""}
              </p>
              <h2 className="prose-headline-h2 mb-[2rem]">
                {productData!.name}
              </h2>
              <p className="prose-body opacity-50 mobile:w-[90%]">
                {productData!.description}
              </p>
              <h6 className="prose-headline-h6 py-[2rem]">
                {formatDollar(productData!.price)}
              </h6>
              <div className="flex flex-row gap-[1rem]">
                <div className="prose-sub-title flex w-[7.5rem] flex-row items-center justify-center gap-[2rem] bg-tertiary-300 px-[1rem] py-[0.25rem] [&>button]:opacity-50">
                  <button
                    className="hover:text-primary-200"
                    onClick={() =>
                      quantity <= 1 ? "" : setQuantity((prev) => prev - 1)
                    }
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="hover:text-primary-200"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={() => handleAddProduct()}
                  className="w-[10rem]"
                  variant="default"
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </SectionCard>
          <SectionCard className="mb-[10rem] flex flex-row items-start justify-center gap-[9.813rem] tablet:flex-col">
            <section className="flex w-[39.688rem] flex-col gap-[2rem] tablet:w-[80%]">
              <h3 className="prose-headline-h3">FEATURES</h3>
              <p className="prose-body whitespace-pre-wrap opacity-50">
                {productData?.features}
              </p>
            </section>
            <section className="flex flex-col justify-between tablet:w-[95%] tablet:flex-row mobile:flex-col mobile:items-start">
              <h3 className="prose-headline-h3 mb-[2rem]">IN THE BOX</h3>
              <div className="flex flex-col gap-[0.5rem]">
                {productData?.includedItems.map(({ item, quantity }) => (
                  <div
                    key={item}
                    className="prose-body flex flex-row items-center gap-[1.5rem]"
                  >
                    <p className="text-primary-200">{quantity}x</p>
                    <p className="opacity-50">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </SectionCard>
          <SectionCard className="mb-[10rem] flex h-auto w-full flex-row justify-center gap-[1.875rem] mobile:flex-col">
            <div className="flex h-auto max-h-[43.75rem] w-[40%] max-w-[31.25rem] flex-col justify-between gap-[2rem] mobile:w-full mobile:justify-center">
              <Image
                src={productData!.gallery.first[size]}
                alt="Shop Icon"
                width={445}
                height={280}
                className="rounded-[0.375rem]"
                style={{
                  objectFit: "contain",
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
              <Image
                src={productData!.gallery.second[size]}
                alt="Shop Icon"
                width={445}
                height={280}
                className="rounded-[0.375rem]"
                style={{
                  objectFit: "contain",
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
            </div>
            <div className="flex h-auto max-h-[43.75rem] w-[60%] max-w-[37rem] object-fill mobile:w-full mobile:justify-center">
              <Image
                src={productData!.gallery.third[size]}
                alt="Shop Icon"
                width={635}
                height={592}
                className="rounded-[0.375rem]"
                style={{
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
            </div>
          </SectionCard>
          <SectionCard className="mb-[14rem] flex w-full flex-col items-center justify-center">
            <h3 className="prose-headline-h3 mb-[4rem]">YOU MAY ALSO LIKE</h3>

            <section className="flex flex-row items-center gap-[2rem] mobile:flex-col">
              {productData?.others.map((product, index) => (
                <div
                  key={index + 1}
                  className="flex flex-col items-center gap-[2.188rem]"
                >
                  <Image
                    className="h-auto w-auto"
                    src={product.image[size]}
                    alt="also like product"
                    width={350}
                    height={318}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h5 className="prose-headline-h5">{product.name}</h5>
                  <Button
                    onClick={() => router.push(`/category/${product.slug}`)}
                    variant="default"
                    className="w-[10rem]"
                  >
                    SEE PRODUCT
                  </Button>
                </div>
              ))}
            </section>
          </SectionCard>
        </>
      )}
    </>
  );
};
