"use client";
import Button from "@/components/button";
import { SectionCard } from "@/components/sectionCard";
import { ShopCard } from "@/components/shopCard";
import earphone from "@images/images/home/desktop/image-earphones-yx1.jpg";
import speaker from "@images/images/home/desktop/image-speaker-zx9.png";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Main = () => {
  const router = useRouter();
  return (
    <main>
      <SectionCard className="flex h-screen w-full flex-col justify-center bg-cover bg-center bg-no-repeat desktop:bg-hero-desktop tablet:bg-hero-tablet mobile:bg-hero-mobile">
        <section className="flex w-[23rem] flex-col items-start gap-[1.313rem] text-tertiary-100 tablet:w-full tablet:items-center tablet:text-center">
          <h2 className="prose-overline opacity-50">NEW PRODUCT</h2>
          <h1 className="prose-headline-h1 mobile:prose-headline-h2">
            XX99 Mark II Headphones
          </h1>
          <p className="prose-body opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            onClick={() =>
              router.push("/category/headphones/xx99-mark-two-headphones")
            }
            className="mt-[2rem] w-[10rem]"
            variant="default"
          >
            See Product
          </Button>
        </section>
      </SectionCard>
      <SectionCard className="pb-[10.5rem] pt-[7.5rem]">
        <ShopCard />
      </SectionCard>
      <SectionCard>
        <section className="relative mb-[3rem] flex h-auto items-end justify-end overflow-hidden rounded bg-primary-200 bg-pattern-circle bg-left-top bg-no-repeat py-[8.125rem] tablet:flex-col tablet:items-center tablet:justify-center tablet:bg-contain tablet:bg-top">
          <div className="absolute bottom-[-2.813rem] left-[3.125rem] h-[30.813rem] w-[25.625rem] tablet:relative tablet:left-0 tablet:mb-[5rem] tablet:h-[14.813rem] tablet:w-[12.313rem]">
            <Image
              src={speaker}
              alt="ZX9 SPEAKER"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className="gap flex w-[21.813rem] flex-col text-tertiary-100 tablet:items-center tablet:text-center">
            <h1 className="prose-headline-h1 pb-[1.5rem]">ZX9 SPEAKER</h1>
            <p className="prose-body pb-[2.5rem]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              onClick={() => router.push("/category/speakers/zx9-speaker")}
              className="w-[10rem]"
              variant="secondary"
            >
              See Product
            </Button>
          </div>
        </section>
        <section className="mb-[3rem] flex h-auto w-full flex-col gap-[2rem] bg-zx7-speaker-desktop bg-cover bg-right bg-no-repeat py-[6.313rem] pl-[5.938rem] mobile:bg-zx7-speaker-mobile">
          <h4 className="prose-headline-h4">ZX7 SPEAKER</h4>
          <Button
            onClick={() => router.push("/category/speakers/zx7-speaker")}
            className="w-[10rem]"
            variant="transparent"
          >
            See Product
          </Button>
        </section>

        <section className="mb-[12.5rem] flex h-[20rem] w-full flex-row gap-[1.875rem] mobile:h-auto mobile:flex-col">
          <Image
            className="h-full w-[50%] rounded-[0.375rem] object-cover mobile:w-full"
            src={earphone}
            alt="earphone product"
            width={0}
            height={0}
          />

          <div className="flex w-full flex-col justify-center gap-[3rem] rounded-[0.375rem] bg-tertiary-300 pl-[5.938rem] tablet:items-center tablet:pl-[1.5rem] mobile:py-[2.563rem]">
            <h4 className="prose-headline-h4">YX1 EARPHONES</h4>
            <Button
              onClick={() => router.push("/category/earphones/yx1-earphones")}
              className="w-[10rem]"
              variant="transparent"
            >
              See Product
            </Button>
          </div>
        </section>
      </SectionCard>
    </main>
  );
};
