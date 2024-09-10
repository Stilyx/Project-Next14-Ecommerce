const Loading = () => {
  const arr = new Array(3).fill(null);
  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="flex w-full flex-row-reverse items-center justify-between gap-[125px] odd:flex-row tablet:flex-col tablet:justify-center tablet:gap-[25px] tablet:odd:flex-col"
        >
          <div
            className={`skeletonCell h-[500px] w-[450px] tablet:h-[352px] tablet:w-full tablet:items-center tablet:justify-center mobile:h-auto`}
          ></div>

          <div className="skeletonDiv flex w-[445px] flex-col tablet:w-full tablet:items-center tablet:justify-center tablet:text-center">
            <h2 className="mb-[2rem] h-[80px] w-[250px] tablet:w-[70%]"></h2>
            <p className="mb-[40px] h-[150px] w-[405px] tablet:w-[90%]"></p>
            <div className="skeletonCell h-[50px] w-[160px]"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
