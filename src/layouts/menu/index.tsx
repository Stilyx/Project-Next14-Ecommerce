import { paths } from "@models/constants/i-nav-path-constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuBurguer =
    " h-1 w-6 bg-tertiary-300 rounded transition-all duration-300 ease-out";

  const handleOpenMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <div className="hidden h-auto tablet:flex">
      <div
        onClick={handleOpenMenu}
        className="absolute top-[2.313rem] z-30 flex flex-col items-center justify-center gap-[0.25rem]"
      >
        <span
          className={`${
            isMenuActive
              ? "mx-auto my-[0.25rem] translate-y-[0.5rem] rotate-45"
              : "-translate-y-0.5"
          } ${menuBurguer}`}
        ></span>
        <span className={`${menuBurguer} ${isMenuActive && "hidden"}`}></span>
        <span
          className={`${
            isMenuActive
              ? "mx-auto my-[0.25rem] translate-y-[-0.5rem] -rotate-45"
              : "translate-y-0.5"
          } ${menuBurguer}`}
        ></span>
      </div>

      <div
        className={`${
          isMenuActive
            ? "bg-white opacity-1 left-0 top-0 h-screen w-[80%] ease-in"
            : "h-screen w-[2rem] opacity-0 ease-out"
        } absolute z-10 flex items-center bg-secondary-100 transition-all duration-100`}
      >
        <div className="grid h-auto w-full grid-cols-3 justify-center gap-[2rem] px-[2.063rem] py-[1.938rem] mobile:grid-cols-2">
          {paths.map((item, index) => (
            <Link
              href={item.path}
              onClick={handleOpenMenu}
              key={index}
              className="flex flex-col items-center"
            >
              <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded bg-primary-200">
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="navigation icon"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <p className="prose-sub-title text-tertiary-300">
                {item.pathName}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
