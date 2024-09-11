"use client";

import { debounce } from "@/hooks/debounce";
import { getSize } from "@/hooks/get-size";
import { IProduct } from "@/models/interfaces";
import { getCategory } from "@/services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import Loading from "./loading";

export const CategoryList = (params: { navigation: string }) => {
  const [size, setSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const router = useRouter();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["category-item", params.navigation],
    queryFn: () => getCategory(params.navigation),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setSize(getSize(window.innerWidth));

      handleResize();

      const debouncedResize = debounce(handleResize, 100);

      window.addEventListener("resize", debouncedResize);
      return () => window.removeEventListener("resize", debouncedResize);
    }
  }, []);

  console.log(data?.map((item, index) => console.log(index)));

  return (
    <>
      {isLoading && isFetching && <Loading />}
      {data?.length &&
        data
          ?.map((item: IProduct, index: number) => (
            <div
              key={index}
              className={`flex w-full flex-row-reverse items-center justify-center gap-[9.813rem] odd:flex-row tablet:flex-col tablet:justify-center tablet:gap-[1.563rem] tablet:odd:flex-col`}
            >
              <div
                className={`flex h-[560px] tablet:h-[22rem] tablet:w-full tablet:items-center tablet:justify-center mobile:h-auto`}
              >
                <Image
                  src={item.categoryImage[size]}
                  alt="Shop Icon"
                  width={500}
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

              <div className="flex w-[27.813rem] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center">
                <p className="prose-overline mb-[1rem] text-primary-200">
                  {item.new ? "NEW PRODUCT" : ""}
                </p>
                <h2 className="prose-headline-h2 mb-[2rem]">{item.name}</h2>
                <p className="prose-body mb-[2.5rem] opacity-50">
                  {item.description}
                </p>
                <Button
                  onClick={() =>
                    router.push(`/category/${item.category}/${item.slug}`)
                  }
                  className="w-[10rem]"
                  variant="default"
                >
                  See product
                </Button>
              </div>
            </div>
          ))
          .reverse()}
    </>
  );
};
