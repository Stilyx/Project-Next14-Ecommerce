import { SectionCard } from "@/components/sectionCard";
import { paths } from "@/models/constants/i-nav-path-constants";
import logo from "@images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { socialMidias } from "./constants";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-secondary-100 pb-[2.875rem]">
      <span className="absolute left-[2.438rem] h-[0.25rem] w-[6.25rem] bg-primary-200 mobile:left-0 mobile:right-0 mobile:mx-auto"></span>
      <SectionCard>
        <section className="flex w-full items-center justify-between pb-[2.25rem] pt-[4.688rem] tablet:flex-col tablet:items-start tablet:gap-[2rem] mobile:items-center mobile:gap-[3rem]">
          <Image
            src={logo}
            width={143}
            height={25}
            style={{ width: "auto", height: "auto" }}
            alt="logo"
            priority
          />
          <nav className="prose-sub-title flex flex-row gap-[2.125rem] mobile:flex-col mobile:items-center [&>*]:text-tertiary-100">
            {paths.map((link, index: number) => (
              <Link
                className="hover:text-primary-200"
                key={index}
                href={link.path}
              >
                {link.pathName.toUpperCase()}
              </Link>
            ))}
          </nav>
        </section>

        <section className="flex w-full flex-col">
          <p className="prose-body w-[33.75rem] text-tertiary-100 opacity-50 tablet:w-[90%] mobile:w-full mobile:text-center">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <section className="flex flex-col justify-between gap-[3.938rem] tablet:flex-row-reverse tablet:gap-0 tablet:pt-[5rem] mobile:flex-col-reverse mobile:items-center mobile:gap-[3rem] mobile:pt-[2.875rem]">
            <div className="flex flex-row items-end justify-end gap-[1rem]">
              {socialMidias.map((midia, index) => (
                <Link key={index} href={midia.href} target="_blank">
                  <Image
                    alt="social media icon"
                    src={midia.icon}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
            <p className="prose-body text-tertiary-100 opacity-50">
              Copyright 2021. All Rights Reserved
            </p>
          </section>
        </section>
      </SectionCard>
    </footer>
  );
};
