import iconShadow from "@images/images/section-shop/icon-shadow.png";
import arrow from "@images/images/shared/desktop/icon-arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
import { shopPaths } from "./constants";

export const ShopCard = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-[1.875rem] mobile:flex-col mobile:gap-[6.25rem]">
      {shopPaths.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="group relative flex h-[12.75rem] w-[21.875rem] flex-col items-center justify-center rounded-[0.375rem] bg-tertiary-300 duration-500 hover:bg-secondary-400"
        >
          <div className="z-1 absolute top-[-9.375rem] flex h-[12.5rem] w-[12.5rem] items-end justify-center">
            <Image
              src={item.icon}
              alt="Shop Icon"
              style={{
                width: "auto",
                height: "auto",
                minHeight: "7.875rem",
                minWidth: "7.563rem",
              }}
            />
          </div>
          <div className="absolute top-[0.313rem] h-[5rem] w-[11.25rem]">
            <Image src={iconShadow} alt="icon shadow" width={0} height={0} />
          </div>

          <section className="flex flex-col justify-end gap-[0.75rem] pt-[3.75rem] group-hover:text-tertiary-300">
            <p className="prose-headline-h6">{item.pathName}</p>
            <div className="flex w-auto flex-row items-center justify-center gap-2">
              <p className="prose-sub-title group-hover:text-primary-200">
                SHOP
              </p>
              <Image
                src={arrow}
                width={5}
                height={10}
                alt="arrow"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </section>
        </Link>
      ))}
    </section>
  );
};
