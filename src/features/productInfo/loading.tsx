import { SectionCard } from "@/components/sectionCard";

export const ProductInfoLoading = () => {
  const othersArr = new Array(3).fill(null);
  const includedArr = new Array(4).fill(null);
  return (
    <SectionCard className="flex w-full flex-col">
      <section className="mb-[10rem] flex w-full items-center justify-center gap-[9.813rem] tablet:justify-center tablet:gap-[4.313rem] mobile:flex-col">
        <div
          className={`skeletonCell flex h-[35rem] w-[36.875rem] object-contain tablet:h-[30rem] tablet:w-[23.813rem] tablet:items-center tablet:justify-center mobile:h-[20.438rem] mobile:w-full`}
        ></div>
        <div className="skeletonDiv flex w-[27.813rem] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center mobile:items-start">
          <p className="mb-[1rem] h-[1.188rem] w-[12.438rem]"></p>
          <h2 className="mb-[2rem] h-[5.5rem] w-[60%]"></h2>
          <p className="h-[6.25rem] w-full tablet:w-[80%]"></p>
          <h6 className="my-[2rem] h-5 w-[3.75rem]"></h6>
          <div className="skeletonDiv flex flex-row gap-[1rem]">
            <div className="skeletonCell flex h-12 w-[7.5rem]"></div>
            <div className="skeletonCell h-12 w-[10rem]"></div>
          </div>
        </div>
      </section>
      <section className="mb-[10rem] flex flex-row items-start justify-center gap-[9.813rem] tablet:flex-col">
        <section className="flex w-[39.688rem] flex-col gap-[2rem] tablet:w-[80%]">
          <h3 className="prose-headline-h3">FEATURES</h3>
          <div className="skeletonDiv flex flex-col gap-[1rem]">
            <p className="h-[6.25rem] w-[90%]"></p>
            <p className="h-[5rem] w-[80%]"></p>
          </div>
        </section>
        <section className="flex flex-col justify-between tablet:w-[95%] tablet:flex-row mobile:flex-col mobile:items-start">
          <h3 className="prose-headline-h3 mb-[2rem]">IN THE BOX</h3>
          <div className="flex flex-col gap-[1rem]">
            {includedArr.map((_, index) => (
              <div
                key={`included-${index}`}
                className="skeletonDiv flex flex-row items-center gap-[1.5rem]"
              >
                <p className="h-4 w-5"></p>
                <p className="h-4 w-[9.375rem]"></p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="mb-[10rem] flex w-full flex-row justify-center gap-[1.875rem] desktop:h-[37rem] tablet:h-[47.25rem] mobile:flex-col">
        <div className="flex h-auto max-h-[43.75rem] w-[40%] max-w-[31.25rem] flex-col justify-between gap-[2rem] mobile:h-full mobile:w-full mobile:flex-col mobile:justify-center">
          <div className="skeletonCell h-[50%] w-full"></div>
          <div className="skeletonCell h-[50%] w-full"></div>
        </div>

        <div className="skeletonCell flex h-full max-h-[43.75rem] w-full max-w-[37rem] object-fill mobile:w-full mobile:justify-center"></div>
      </section>
      <section className="mb-[14rem] flex w-full flex-col items-center justify-center">
        <h3 className="prose-headline-h3 mb-[4rem]">YOU MAY ALSO LIKE</h3>

        <section className="flex w-full flex-row items-center gap-[2rem] mobile:flex-col">
          {othersArr.map((_, index) => (
            <div
              key={`others-${index}`}
              className="skeletonDiv flex w-full flex-col items-center gap-[2.188rem]"
            >
              <div className="skeletonCell h-[19.875rem] w-full"></div>
              <h5 className="h-[2.063rem] w-[6.438rem]"></h5>
              <div className="skeletonCell h-[3rem] w-[10rem]"></div>
            </div>
          ))}
        </section>
      </section>
    </SectionCard>
  );
};
