export const Loading = () => {
	const arr = new Array(3).fill(null);
	return (
		<>
			<div className="skeletonDiv flex flex-row justify-between pb-[2rem]">
				<p className="h-[1.5rem] w-[6.25rem]"></p>
				<button className="w-[6.25rem] h-[1.5rem]"></button>
			</div>
			<div className="flex flex-col gap-[0.8rem] mb-[2rem] max-h-[11.25rem] overflow-y-auto tablet:max-h-[15rem]">
				{arr?.map((_, index: number) => (
					<div
						key={index}
						className="flex items-center flex-row justify-between mr-[1.25rem]"
					>
						<div className="flex flex-row gap-[1rem] items-center ">
							<div className="skeletonCell w-[2.75rem] h-[2.75rem] rounded-[0.625rem] "></div>
							<div className="skeletonDiv flex flex-col gap-[0.938rem]">
								<div className="w-[5rem] h-[1rem]"></div>
								<div className="w-[3.125rem] h-[1rem]"></div>
							</div>
						</div>

						<div className="skeletonCell w-[5rem] h-[2rem]"></div>
					</div>
				))}
			</div>
			<div className=" skeletonDiv flex flex-row mb-[1.5rem] justify-between items-center">
				<div className=" w-[3.75rem] h-[1rem]"></div>
				<div className="w-[5rem] h-[1.75rem]"></div>
			</div>
			<div className="w-full h-[3rem] skeletonCell"></div>
		</>
	);
};
