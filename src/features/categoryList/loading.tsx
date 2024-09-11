const Loading = () => {
  const arr = new Array(3).fill(null);
  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="flex w-full flex-row-reverse items-center justify-between gap-[10rem] odd:flex-row tablet:flex-col tablet:justify-center tablet:gap-[1.563rem] tablet:odd:flex-col"
        >
          <div
            className={`skeletonCell h-[33.75rem] w-[35rem] tablet:h-[15.75rem] tablet:w-[80%] tablet:items-center tablet:justify-center`}
          ></div>

          <div className="skeletonDiv flex w-[27.813rem] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center">
            <h2 className="mb-[2rem] h-[5rem] w-[15.625rem] tablet:w-[70%]"></h2>
            <p className="mb-[2.5rem] h-[9.375rem] w-[25.313rem] tablet:w-[90%]"></p>
            <div className="skeletonCell h-[3.125rem] w-[10rem]"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
