"use client";

import Button from "@/components/button";
import { SectionCard } from "@/components/sectionCard";
import { ShopCard } from "@/components/shopCard";
import { getSize } from "@/hooks/get-size";
import { getCategory } from "@/services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Category({
  params,
}: {
  params: { navigation: string };
}) {
  const [size, setSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["category-item", params.navigation],
    queryFn: () => getCategory(params.navigation),
  });

  const handleResize = () => {
    setSize(getSize(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-secondary-300 py-[98px] text-center text-tertiary-100">
        <h1 className="prose-headline-h2">{params.navigation.toUpperCase()}</h1>
      </div>
      <SectionCard className="my-[160px] flex flex-col gap-[160px]">
        {isLoading && isFetching && <Loading />}
        {data
          ?.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-row-reverse items-center justify-between gap-[125px] odd:flex-row tablet:flex-col tablet:justify-center tablet:gap-[25px] tablet:odd:flex-col"
            >
              <div
                className={`flex h-[50%] w-[50%] tablet:h-[352px] tablet:w-full tablet:items-center tablet:justify-center mobile:h-auto`}
              >
                <Image
                  src={item.categoryImage[size]}
                  alt="Shop Icon"
                  width={500}
                  height={300}
                  className="rounded-[6px]"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="flex w-[445px] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center">
                <p className="prose-overline mb-[1rem] text-primary-200">
                  {item.new ? "NEW PRODUCT" : ""}
                </p>
                <h2 className="prose-headline-h2 mb-[2rem]">{item.name}</h2>
                <p className="prose-body mb-[40px] opacity-50">
                  {item.description}
                </p>
                <Button className="w-[160px]" variant="default">
                  See product
                </Button>
              </div>
            </div>
          ))
          .reverse()}
      </SectionCard>
      <SectionCard className="py-[160px]">
        <ShopCard />
      </SectionCard>
    </>
  );
}
