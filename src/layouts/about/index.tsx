import { SectionCard } from "@/components/sectionCard";

export const About = () => {
  return (
    <SectionCard className="mb-[12.5rem] flex w-full flex-row items-center justify-center gap-[7.813rem] tablet:mb-[6rem] tablet:flex-col-reverse tablet:items-center tablet:gap-[4.063rem] mobile:mb-[7.5rem]">
      <section className="flex w-[27.813rem] flex-col gap-[2rem] tablet:text-center mobile:w-full">
        <h2 className="prose-headline-h2 mobile:prose-headline-h4">
          Bringing you the <span className="text-primary-200">best</span> audio
          gear
        </h2>
        <p className="prose-body opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>

      <div className="h-[36.75rem] w-[50%] bg-contain bg-right bg-no-repeat desktop:bg-best-gear-desktop tablet:h-[18.75rem] tablet:w-full tablet:bg-best-gear-tablet tablet:bg-contain tablet:bg-center mobile:bg-best-gear-mobile"></div>
    </SectionCard>
  );
};
