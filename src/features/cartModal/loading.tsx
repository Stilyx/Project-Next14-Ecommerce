export const Loading = () => {
  const arr = new Array(3).fill(null);
  return (
    <>
      <section className="skeletonDiv flex flex-row justify-between pb-[2rem]">
        <p className="h-[1.5rem] w-[6.25rem]"></p>
        <button className="h-[1.5rem] w-[6.25rem]"></button>
      </section>
      <section className="mb-[2rem] flex max-h-[11.25rem] flex-col gap-[0.8rem] overflow-y-auto tablet:max-h-[15rem]">
        {arr?.map((_, index: number) => (
          <div
            key={index}
            className="mr-[1.25rem] flex flex-row items-center justify-between"
          >
            <div className="flex flex-row items-center gap-[1rem]">
              <div className="skeletonCell h-[2.75rem] w-[2.75rem] rounded-[0.625rem]"></div>
              <div className="skeletonDiv flex flex-col gap-[0.938rem]">
                <div className="h-[1rem] w-[5rem]"></div>
                <div className="h-[1rem] w-[3.125rem]"></div>
              </div>
            </div>

            <div className="skeletonCell h-[2rem] w-[5rem]"></div>
          </div>
        ))}
      </section>
      <section className="skeletonDiv mb-[1.5rem] flex flex-row items-center justify-between">
        <div className="h-[1rem] w-[3.75rem]"></div>
        <div className="h-[1.75rem] w-[5rem]"></div>
      </section>
      <div className="skeletonCell h-[3rem] w-full"></div>
    </>
  );
};
